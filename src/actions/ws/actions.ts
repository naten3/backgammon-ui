import axios from 'axios';
import { setToken, getUserIdFromToken, getToken } from '../../util/storage.utils'
import { WS_AUTHENTICATE, WebsocketActionTypes, WS_WATCH_GAME, WS_JOIN_GAME } from "./types";
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../reducers/root.reducer';

export function websocketAuthenticate(token: string): WebsocketActionTypes {
  return {
    type: WS_AUTHENTICATE,
    payload: token,
    meta: { send: true }
  }
}

export function websocketJoinGame(gameId: string): WebsocketActionTypes {
  return {
    type: WS_JOIN_GAME,
    payload: gameId,
    meta: { send: true }
  }
}

export function websocketWatchGame(gameId: string): WebsocketActionTypes {
  return {
    type: WS_WATCH_GAME,
    payload: gameId,
    meta: { send: true }
  }
}

