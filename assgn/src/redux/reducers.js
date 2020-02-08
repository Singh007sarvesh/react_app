import { combineReducers } from 'redux';


import {
  getRestaurantName,
  } from './common';

const reducers = combineReducers({
  getRestaurantName,
});
export default reducers;
