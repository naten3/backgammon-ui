import { Game } from "../../store/game/types";
import { SEND_MESSAGE, GameActionTypes, DELETE_MESSAGE } from "./types";

export function sendMessage(newMessage: Game): GameActionTypes {
    return {
      type: SEND_MESSAGE,
      payload: newMessage
    }
  }
  
  // TypeScript infers that this function is returning DeleteMessageAction
  export function deleteMessage(timestamp: number): GameActionTypes {
    return {
      type: DELETE_MESSAGE,
      meta: {
        timestamp
      }
    }
  }