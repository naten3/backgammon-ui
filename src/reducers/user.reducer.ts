import { GameState } from "../store/game/types";
import { UserState } from "../store/user/types";
import { SET_AUTHENTICATED, UserActionTypes, FETCHING_AUTHENTICATION } from "../actions/user/types";
//@ts-ignore
import { OPEN } from 'redux-websocket-bridge';
import { WS_OPEN, WS_AUTHENTICATED, WebsocketActionTypes, WsAuthenticatedAction, WsChangeNameAction, WS_CHANGE_NAME } from "../actions/ws/types";

const initialState: UserState = {
  userId: null,
  displayName: null,
  hasAuthed: false,
  fetchingToken: false,
  websocketConnected: false,
  wsAuthed: false
}

export function userReducer(
  state = initialState,
  action: UserActionTypes | WsAuthenticatedAction | WsChangeNameAction
): UserState {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        userId: action.payload,
        hasAuthed: true,
        fetchingToken: false
      }
    case FETCHING_AUTHENTICATION:
      return {
        ...state,
        fetchingToken: true
      }
    case WS_OPEN:
      console.log("websocket opened");
      return {
        ...state,
        websocketConnected: true
      }
    case WS_AUTHENTICATED:
      return {
        ...state,
        wsAuthed: true,
        displayName: action.payload
      }
    case WS_CHANGE_NAME:
      return {
        ...state,
        displayName: action.payload
      }
    default:
      return state
  }
}