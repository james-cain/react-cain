import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as formData from './home/reducer';
import * as proData from './production/reducer';
import * as basicData from './home91/reducer';
import * as menuData from './menu/reducer';
import * as user from './info/reducer';
import thunk from 'redux-thunk';

let store = createStore(
  combineReducers({ ...formData, ...proData, ...basicData, ...menuData, ...user }),
  applyMiddleware(thunk)
);

export default store;
