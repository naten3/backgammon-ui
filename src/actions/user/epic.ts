import { Action } from "redux";
import { Observable, combineLatest, merge, from, of as observableOf, empty as emptyObservable } from 'rxjs';
import { filter, delay, map, flatMap, first, mergeMap, withLatestFrom, publishReplay, refCount, tap, concat, take } from 'rxjs/operators';
import { SET_AUTHENTICATED, SetAuthenticatedAction, AUTHENTICATE, NAVIGATED_TO_GAME, NavigatedToGameAction } from "./types";
import { websocketAuthenticate, websocketWatchGame } from "../ws/actions";
import { ActionsObservable } from "redux-observable";
import { AllActionTypes } from '../allActions';
import { OpenWsAction, WS_OPEN, WS_AUTHENTICATED, WsAuthenticatedAction } from "../ws/types";
import axios from 'axios';
import { setToken, getUserIdFromToken, getToken } from '../../util/storage.utils'
import { setAuthenticated, navigatedToGameAction } from "./actions";

export const userEpic = (action$: ActionsObservable<AllActionTypes>) => {
  const wsAuthenticated$ = action$.ofType<WsAuthenticatedAction>(WS_AUTHENTICATED).pipe(
    first(), publishReplay(1), refCount());

  wsAuthenticated$.subscribe((action) => console.log('ws authenticated emitted'));
  wsAuthenticated$.subscribe((action) => console.log('ws authenticated emitted again'));

  return merge(authenticateWebsocket(action$), fetchActions(action$), wsWatchGameOnChange(action$, wsAuthenticated$));
}

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

// when game route changes for any reason watch a new game on the ws
export const wsWatchGameOnChange = (action$: ActionsObservable<AllActionTypes>, wsAuthenticated$: Observable<any>) => {
  //wait for websocket authentication
  return combineLatest(
    action$.ofType<NavigatedToGameAction>(NAVIGATED_TO_GAME),
    wsAuthenticated$.pipe(take(1)),
  ).pipe(
    map(([navigateGameAction]) => websocketWatchGame(navigateGameAction.payload)))
}