import { Game } from "../../store/game/types";

export const AUTHENTICATE = 'AUTHENTICATE';
export const SET_AUTHENTICATED = 'SET_AUTHENTICATED'
export const FETCHING_AUTHENTICATION = 'FETCHING_AUTHENTICATION'
export const NAVIGATED_TO_GAME = 'NAVIGATED_TO_GAME';
export const UPDATE_LOCAL_NAME = 'UPDATE_LOCAL_NAME';

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

export interface NavigatedToGameAction {
  type: typeof NAVIGATED_TO_GAME;
  payload: string; // gameId
}

export interface UpdateLocalNameAction {
  type: typeof UPDATE_LOCAL_NAME;
  payload: string;
}


export type UserActionTypes = SetAuthenticatedAction | FetchingAuthenticationAction | AuthenticateAction
  | NavigatedToGameAction | UpdateLocalNameAction;