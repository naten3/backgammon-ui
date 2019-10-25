import { createStore, applyMiddleware, Store, compose } from 'redux';
//@ts-ignore
import ReduxWebSocketBridge from 'redux-websocket-bridge';
import { rootReducer, AppState, rootEpic } from '../reducers/root.reducer';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

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

  const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware, wsMiddleware))
  );

  epicMiddleware.run(rootEpic);
  return store;
}