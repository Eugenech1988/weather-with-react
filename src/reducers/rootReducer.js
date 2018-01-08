import { combineReducers } from 'redux';
import loading from './loaderReducer';
import {userDetails} from './userReducer';

export default combineReducers({
  loading,
  userDetails
});
