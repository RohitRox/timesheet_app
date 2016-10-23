import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import * as reducers from '../reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinedCreateStore = composeEnhancers(
  applyMiddleware(thunk)
)(createStore);

export default function configureStore(initialState) {
  return combinedCreateStore(combineReducers(reducers), initialState);
};
