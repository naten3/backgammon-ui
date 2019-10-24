import axios from 'axios';
import { UserActionTypes, SET_AUTHENTICATED, FETCHING_AUTHENTICATION, AUTHENTICATE, SetAuthenticatedAction, AuthenticateAction, FetchingAuthenticationAction } from "./types";
import { websocketAuthenticate } from '../ws/actions';
import { AppState } from '../../reducers/root.reducer';

export function authenticateAction(): AuthenticateAction {
  return {
    type: AUTHENTICATE
  }
}

export function setAuthenticated(userId: string): SetAuthenticatedAction {
  return {
    type: 'SET_AUTHENTICATED',
    payload: userId
  }
}

export function fetchingAuthentication(): FetchingAuthenticationAction {
  return {
    type: FETCHING_AUTHENTICATION,
  }
}

