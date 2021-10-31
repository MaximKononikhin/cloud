import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { file } from './reducers';
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import React from "react";

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

export const renderWithRedux = (
    component: JSX.Element,
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store,
    };
};