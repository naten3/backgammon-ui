import axios from 'axios';
import {setToken, getUserIdFromToken, getToken} from '../../util/storage.utils'
import { AUTHENTICATE, WebsocketActionTypes } from "./types";
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../reducers/root.reducer';

export function websocketAuthenticate(token: string): WebsocketActionTypes {
    return {
      type: AUTHENTICATE,
      payload: token,
      meta: { send: true }
    }
  }
