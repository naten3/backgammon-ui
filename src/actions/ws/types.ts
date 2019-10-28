import { OPEN } from 'redux-websocket-bridge';
import { Game } from '../../store/game/types';
export const WS_AUTHENTICATE = 'wsAuthenticate'
export const WS_OPEN = `@@websocket/${OPEN}`;
export const WS_WATCH_GAME = 'wsWatchGame';
export const WS_JOIN_GAME = 'wsJoinGame';
export const WS_CHANGE_NAME = 'wsChangeName';

// received messages
export const WS_AUTHENTICATED = 'wsAuthenticated';
export const WS_WATCHED_GAME = 'wsWatchedGame';
export const WS_USER_JOINED = 'wsUserJoined';
export const WS_USER_NAME_CHANGED = 'wsUserNameChanged';
export const WS_INITIAL_ROLL = 'wsInitialRoll';

interface WebsocketSendAction {
  meta: { send: true }
}

interface Authenticate extends WebsocketSendAction {
  type: typeof WS_AUTHENTICATE
  payload: string
}

export interface OpenWsAction {
  type: typeof WS_OPEN;
}

export interface WsWatchGameAction extends WebsocketSendAction {
  type: typeof WS_WATCH_GAME;
  payload: string;
}

export interface WsJoinGameAction extends WebsocketSendAction {
  type: typeof WS_JOIN_GAME;
  payload: string;
}

export interface WsChangeNameAction extends WebsocketSendAction {
  type: typeof WS_CHANGE_NAME;
  payload: string;
}

export interface WsInitialRollAction extends WebsocketSendAction {
  type: typeof WS_INITIAL_ROLL;
}

// received messages

export interface WsAuthenticatedAction {
  type: typeof WS_AUTHENTICATED;
  payload: { displayName: string }
}

export interface WsUserJoinedAction {
  type: typeof WS_USER_JOINED;
  payload: {
    game: Game, whiteName: string | null, blackName: string | null;
  }
}

export interface WsWatchedGameAction {
  type: typeof WS_WATCHED_GAME;
  payload: {
    game: Game, whiteName: string | null, blackName: string | null;
  }
}

export interface WsUserNameChangedAction {
  type: typeof WS_USER_NAME_CHANGED;
  payload: {
    userId: string,
    displayName: string
  }
}

export type WebsocketActionTypes = Authenticate | OpenWsAction | WsChangeNameAction |
  WsWatchGameAction | WsJoinGameAction | WsAuthenticatedAction | WsUserJoinedAction | WsWatchedGameAction |
  WsUserNameChangedAction
