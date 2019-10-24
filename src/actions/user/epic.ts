import { Action } from "redux";
import { Observable, combineLatest, merge, from, of as observableOf, empty as emptyObservable } from 'rxjs';
import { filter, delay, map, flatMap, first, mergeMap } from 'rxjs/operators';
import { SET_AUTHENTICATED, SetAuthenticatedAction, AUTHENTICATE } from "./types";
import { websocketAuthenticate } from "../ws/actions";
import { ActionsObservable } from "redux-observable";
import { AllActionTypes } from '../allActions';
import { OpenWsAction, WS_OPEN } from "../ws/types";
import axios from 'axios';
import { setToken, getUserIdFromToken, getToken } from '../../util/storage.utils'
import { setAuthenticated } from "./actions";

export const userEpic = (action$: ActionsObservable<AllActionTypes>) =>
  merge(authenticateWebsocket(action$), fetchActions(action$))


/**
 * Pass the token through the websocket to tell the backend it's ours
 */
export const authenticateWebsocket = (action$: ActionsObservable<AllActionTypes>) =>
  combineLatest(
    action$.ofType<SetAuthenticatedAction>(SET_AUTHENTICATED),
    action$.ofType<OpenWsAction>(WS_OPEN))
    .pipe(
      first(),
      map(([setAuthenticatedAction, wsOpenAction]) =>
        websocketAuthenticate(getToken())))

export const fetchActions = (action$: ActionsObservable<AllActionTypes>) => action$.pipe(mergeMap(
  action => {
    switch (action.type) {
      case AUTHENTICATE:
        const t = getToken();
        if (t) {
          return observableOf(setAuthenticated(getUserIdFromToken(t)));
        }
        return from(axios.get('/api/login'))
          .pipe(map(result => {
            const token = result.data.token;
            setToken(token)
            return setAuthenticated(getUserIdFromToken(token));
          }));
      default: return emptyObservable();
    }
  }
));