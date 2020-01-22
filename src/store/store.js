import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const configureStore = () => {
  return createStore(reducers, applyMiddleware(thunk));
};

const store = configureStore();

export const getState = () => {
  return store.getState();
};

export default store;
