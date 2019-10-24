import { OPEN } from 'redux-websocket-bridge';
export const WS_AUTHENTICATE = 'wsAuthenticate'
export const WS_OPEN = `@@websocket/${OPEN}`;

interface WebsocketSendAction {

  meta: { send: true }
}

interface Authenticate extends WebsocketSendAction {
  type: typeof WS_AUTHENTICATE
  data: string
}

export interface OpenWsAction {
  type: typeof WS_OPEN;
}

export type WebsocketActionTypes = Authenticate | OpenWsAction