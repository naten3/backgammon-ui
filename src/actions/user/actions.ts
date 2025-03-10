import { FETCHING_AUTHENTICATION, AUTHENTICATE, SetAuthenticatedAction, AuthenticateAction, FetchingAuthenticationAction, NavigatedToGameAction, NAVIGATED_TO_GAME, UpdateLocalNameAction, UPDATE_LOCAL_NAME } from "./types";
import { WsChangeNameAction } from "../ws/types";

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

export function navigatedToGameAction(gameId: string): NavigatedToGameAction {
  return {
    type: NAVIGATED_TO_GAME,
    payload: gameId
  }
}

export function updateLocalNameAction(displayName: string): UpdateLocalNameAction {
  return {
    type: UPDATE_LOCAL_NAME,
    payload: displayName
  }
}

