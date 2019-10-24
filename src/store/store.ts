import { createStore, applyMiddleware, Store } from 'redux';
//@ts-ignore
import ReduxWebSocketBridge from 'redux-websocket-bridge';
import { rootReducer, AppState, rootEpic } from '../reducers/root.reducer';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware();

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

  const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware, wsMiddleware)
  );

  epicMiddleware.run(rootEpic);
  return store;
}