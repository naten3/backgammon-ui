import { Game } from "../../store/game/types";

export const SET_AUTHENTICATED = 'SET_AUTHENTICATED'
export const FETCHING_AUTHENTICATION = 'FETCHING_AUTHENTICATION'

interface SetAuthenticated {
  type: typeof SET_AUTHENTICATED
  payload: string
}

interface FetchingAuthentication {
  type: typeof FETCHING_AUTHENTICATION
}

export type UserActionTypes = SetAuthenticated | FetchingAuthentication