import { GameState } from "../store/game/types";
import { UserState } from "../store/user/types";
import { SET_AUTHENTICATED, UserActionTypes, FETCHING_AUTHENTICATION } from "../actions/user/types";
//@ts-ignore
import { OPEN } from 'redux-websocket-bridge';

  const initialState: UserState = {
    userId: null,
    hasAuthed: false,
    fetchingToken: false,
    websocketConnected: false
  }
  
  export function userReducer(
    state = initialState,
    action: UserActionTypes
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
      case `@@websocket/${ OPEN }`:
        console.log("websocket opened");
        return {
          ...state,
          websocketConnected: true
        }
      default:
        return state
    }
  }