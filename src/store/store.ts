import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
//@ts-ignore
import ReduxWebSocketBridge from 'redux-websocket-bridge';
import { rootReducer, AppState } from '../reducers/root.reducer';
export const configureStore = () => {

  const loc = window.location;
  let newUri: string;
  if (loc.protocol === "https:") {
    newUri = "wss:";
  } else {
    newUri = "ws:";
  }
  newUri += "//" + loc.host;
  newUri += "/ws";
 const wsMiddleware = ReduxWebSocketBridge(newUri);
  
return createStore(
   rootReducer,
   applyMiddleware(thunk, wsMiddleware)
 );
}