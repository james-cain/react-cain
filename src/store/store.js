import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as formData from './home/reducer';
import * as proData from './production/reducer';
import thunk from 'redux-thunk';

let store = createStore(
  combineReducers({ ...formData, ...proData }),
  applyMiddleware(thunk)
);

export default store;
