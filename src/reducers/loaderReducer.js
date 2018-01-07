import {
  LOADING_COMPLETED,
  LOADING_STARTED
} from '../constants/loaderConst';

const initialState = false;

export default function loading( state = initialState, action ) {
  switch ( action.type ) {
    case LOADING_COMPLETED:
      return true;
    case LOADING_STARTED:
      return false;
    default:
      return state;
  }
}
