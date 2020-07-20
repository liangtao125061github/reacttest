import {createStore, combineReducers} from 'redux';
import * as login from '../views/login';
import * as home from '../views/home';

let store = createStore(
  combineReducers({...login, ...home}),
);

export default store;