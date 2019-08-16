import axios from 'axios';
import {setToken, getUserIdFromToken, getToken} from '../../util/storage.utils'
import { UserActionTypes, SET_AUTHENTICATED, FETCHING_AUTHENTICATION } from "./types";
import { websocketAuthenticate } from '../ws/actions';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../reducers/root.reducer';

export function setAuthenticated(userId: string): UserActionTypes {
    return {
      type: SET_AUTHENTICATED,
      payload: userId
    }
  }
  
  // TypeScript infers that this function is returning DeleteMessageAction
  export function fetchingAuthentication(): UserActionTypes {
    return {
      type: FETCHING_AUTHENTICATION,
    }
  }

  export function fetchToken() {
    return function (dispatch: ThunkDispatch<{}, {}, any>, getState: () => AppState) {
      const t = getToken();
      if (t) {
        dispatch(setAuthenticated(getUserIdFromToken(t)));
        dispatch(websocketAuthenticate(t))
        return Promise.resolve();
      } else {
      dispatch(fetchingAuthentication());
      return axios.get('/api/login')
      .then((response) => {
         const token = response.data.token;
         setToken(token)
         dispatch(setAuthenticated(getUserIdFromToken(token)));
         dispatch(websocketAuthenticate(token))
      },
     );
    };
   }
  }

const sendWebSocketAuth = function(token: string){
  
}
