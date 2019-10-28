import { GameState } from "../store/game/types";
import { UserState } from "../store/user/types";
import { SET_AUTHENTICATED, UserActionTypes, FETCHING_AUTHENTICATION, UPDATE_LOCAL_NAME } from "../actions/user/types";
//@ts-ignore
import { OPEN } from 'redux-websocket-bridge';
import { WS_OPEN, WS_AUTHENTICATED, WebsocketActionTypes, WsAuthenticatedAction, WsChangeNameAction, WS_CHANGE_NAME, WS_USER_JOINED } from "../actions/ws/types";

const initialState: UserState = {
  userId: null,
  displayName: '',
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
        displayName: action.payload ? action.payload.displayName : ''
      }
    case WS_CHANGE_NAME:
    case UPDATE_LOCAL_NAME:
      return {
        ...state,
        displayName: action.payload || ''
      }
    default:
      return state
  }
}