import { GameState } from "../store/game/types";
import { Color } from "../model/game.models";
import { GameActionTypes, SEND_MESSAGE, DELETE_MESSAGE } from "../actions/game/types";
import { AllActionTypes } from "../actions/allActions";
import { WS_USER_JOINED, WS_WATCHED_GAME, WsUserJoinedAction, WsWatchedGameAction, WS_USER_NAME_CHANGED, WsUserNameChangedAction } from "../actions/ws/types";

const initialState: GameState = {
  game: {
    id: null,
    black: null,
    white: null,
    board: { spaces: new Array(24).fill(0).map(x => ({ color: Color.None, count: 0 })) },
    initialRoll: true,
    blackInitialRoll: 0,
    whiteInitialRoll: 0,
    currentRoll: null,
    currentTurn: Color.None
  },
  whiteName: null,
  blackName: null
}

export function gameReducer(
  state = initialState,
  action: WsUserJoinedAction | WsWatchedGameAction | WsUserNameChangedAction
): GameState {
  switch (action.type) {
    case WS_WATCHED_GAME:
    case WS_USER_JOINED:
      return {
        ...state,
        game: action.payload.game,
        whiteName: action.payload.whiteName,
        blackName: action.payload.blackName
      };
    case WS_USER_NAME_CHANGED:
      if (state.game.white === action.payload.userId) {
        return {
          ...state,
          whiteName: action.payload.displayName
        }
      } else if (state.game.black === action.payload.userId) {
        return {
          ...state,
          blackName: action.payload.displayName
        }
      } else {
        return state;
      }
    default:
      return state
  }
}