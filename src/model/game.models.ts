import { Game } from "../store/game/types";

export interface Board {
  spaces: Triangle[]
}

export interface Triangle {
  color: Color,
  count: number
}

export enum Color {
  Black = 0,
  White = 1,
  None = -1
}


export const getInitialRoll = (game: Game, color: Color) => {
  if (color === Color.Black) {
    return game.blackInitialRoll;
  } else if (color === Color.White) {
    return game.whiteInitialRoll
  } else {
    throw Error("no matching color " + color);
  }
}