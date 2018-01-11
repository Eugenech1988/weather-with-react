import {startLoading, finishLoading} from 'actions/loaderAction';
import {getUserPositionApi} from 'helpers/helpers';
import {GET_USER_COORDS_SUCCESS, GET_USER_COORDS_ERROR} from 'constants/userConstants';
import {SET_CUSTOM_COORDS} from "../constants/userConstants";

export const getUserCoordsSuccess = (lat, lng) => {
  return ({
    lat,
    lng,
    type: GET_USER_COORDS_SUCCESS
  });
};

export const getUserCoordsError = () => {
  return ({
    type: GET_USER_COORDS_ERROR
  });
};

export const setCustomCoords = (lat, lng) => {
  return ({
    lat,
    lng,
    type: SET_CUSTOM_COORDS
  });
};

export const getUserPosition = () => dispatch => {
  dispatch(startLoading());
  getUserPositionApi()
    .then((res) => {
      console.log(res);
      const coords = res.coords;
      dispatch(getUserCoordsSuccess(coords.latitude, coords.longitude));
      dispatch(finishLoading());
    })
    .catch((err) => {
      console.error(err.message);
      dispatch(getUserCoordsError());
      dispatch(finishLoading());
    });
};


