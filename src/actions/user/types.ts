import { Game } from "../../store/game/types";

export const AUTHENTICATE = 'AUTHENTICATE';
export const SET_AUTHENTICATED = 'SET_AUTHENTICATED'
export const FETCHING_AUTHENTICATION = 'FETCHING_AUTHENTICATION'

export interface AuthenticateAction {
  type: typeof AUTHENTICATE;
}

export interface SetAuthenticatedAction {
  type: typeof SET_AUTHENTICATED;
  payload: string;
}

export interface FetchingAuthenticationAction {
  type: typeof FETCHING_AUTHENTICATION
}


export type UserActionTypes = SetAuthenticatedAction | FetchingAuthenticationAction | AuthenticateAction;