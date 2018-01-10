import { combineReducers } from 'redux';
import loading from './loaderReducer';
import {userDetails} from './userReducer';
import {weather} from './weatherReducer';

export default combineReducers({
  weather,
  loading,
  userDetails
});
