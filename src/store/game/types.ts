import { Color, Board } from "../../model/game.models";

export interface Game {
  id: string | null;
  black: string | null;
  white: string | null;
  board: Board
  initialRoll: boolean,
  blackInitialRoll: number,
  whiteInitialRoll: number,
  currentRoll: number[] | null,
  currentTurn: Color
}

export interface GameState {
  game: Game,
  whiteName: string | null,
  blackName: string | null
}
