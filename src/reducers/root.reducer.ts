
import { combineReducers } from "redux";
import { gameReducer } from "./game.reducer";
import { userReducer } from './user.reducer'

export const rootReducer = combineReducers({
  game: gameReducer,
  user: userReducer
})

export type AppState = ReturnType<typeof rootReducer>