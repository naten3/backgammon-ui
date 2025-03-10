import { Color, Board } from "../../model/game.models";

export interface UserState {
  userId: string | null;
  displayName: string | null;
  hasAuthed: boolean;
  fetchingToken: boolean;
  websocketConnected: boolean;
  wsAuthed: boolean;
}
