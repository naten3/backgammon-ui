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

// received messages

export interface WsAuthenticatedAction {
  type: typeof WS_AUTHENTICATED;
  payload: string; // { username }
}

export interface WsUserJoinedAction {
  type: typeof WS_USER_JOINED;
  payload: Game;
}

export interface WsWatchedGameAction {
  type: typeof WS_WATCHED_GAME;
  payload: Game;
}

export type WebsocketActionTypes = Authenticate | OpenWsAction | WsChangeNameAction |
  WsWatchGameAction | WsJoinGameAction | WsAuthenticatedAction | WsUserJoinedAction | WsWatchedGameAction
