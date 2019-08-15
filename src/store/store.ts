import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer, AppState } from '../reducers/root.reducer';
export const configureStore = () => {
return createStore(
   rootReducer,
   applyMiddleware(thunk)
 );
}