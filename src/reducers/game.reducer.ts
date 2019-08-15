import { GameState } from "../store/game/types";
import { Color } from "../model/game.models";
import { GameActionTypes, SEND_MESSAGE, DELETE_MESSAGE } from "../actions/game/types";

  const initialState: GameState = {
    game: {id: null,
    black: null,
    white: null,
    board: { spaces: new Array(24).fill(0).map(x => ({ color: Color.None, count: 0}))},
    initialRoll: true,
    blackInitialRoll: 0,
    whiteInitialRoll: 0,
    currentRoll: null,
    currentTurn: Color.None,
    whiteName: null,
    blackName: null}
  }
  
  export function gameReducer(
    state = initialState,
    action: GameActionTypes
  ): GameState {
    switch (action.type) {
      case SEND_MESSAGE:
        return state;
      case DELETE_MESSAGE:
        return state;
      default:
        return state
    }
  }