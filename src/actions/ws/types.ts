export const AUTHENTICATE = 'authenticate'

interface WebsocketSendAction {

  meta: {send: true}
}

interface Authenticate extends WebsocketSendAction {
  type: typeof AUTHENTICATE
  payload: string
}

export type WebsocketActionTypes = Authenticate