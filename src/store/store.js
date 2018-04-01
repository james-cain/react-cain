import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as formData from './home/reducer';
import * as proData from './production/reducer';
import * as basicData from './home91/reducer';
import * as menuData from './menu/reducer';
import * as user from './info/reducer';
import * as applyCreditCardData from './apply_credit_card/reducer';
import * as orders from './orders/reducer';
import * as notice from './notice/reducer';
import * as steps from './upgrade/reducer';
import thunk from 'redux-thunk';

let store = createStore(
  combineReducers({
    ...formData,
    ...proData,
    ...basicData,
    ...menuData,
    ...user,
    ...applyCreditCardData,
    ...orders,
    ...notice,
    ...steps,
  }),
  applyMiddleware(thunk)
);

export default store;
