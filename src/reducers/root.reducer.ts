
import { combineReducers } from "redux";
import { combineEpics } from 'redux-observable';
import { gameReducer } from "./game.reducer";
import { userReducer } from './user.reducer'
import { userEpic } from '../actions/user/epic'

export const rootEpic = combineEpics(
  userEpic
);

export const rootReducer = combineReducers({
  game: gameReducer,
  user: userReducer
})

export type AppState = ReturnType<typeof rootReducer>