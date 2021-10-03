import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { file } from './reducers';

const rootReducer = combineReducers({
    file
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(
      applyMiddleware(thunk)
  )
);

const state = store.getState();

export type IState = typeof state;