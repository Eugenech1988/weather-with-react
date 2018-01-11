import {GET_USER_COORDS_SUCCESS, GET_USER_COORDS_ERROR, SET_CUSTOM_COORDS, TOOLTIP_INIT} from 'constants/userConstants';

const initialState = {
  lat: 42.5047926,
  lng: 27.4626361,
  tooltipInited: false
};

export const userDetails = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_COORDS_SUCCESS:
      return {...state, lat: action.lat, lng: action.lng};
    case GET_USER_COORDS_ERROR:
      return {...state};
    case SET_CUSTOM_COORDS:
      return {...state, lat: action.lat, lng: action.lng};
    case TOOLTIP_INIT:
      return {...state, tooltipInited: true};
    default:
      return state;
  }
};
