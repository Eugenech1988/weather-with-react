import {startLoading, finishLoading} from 'actions/loaderAction';
import {getUserPositionApi} from 'helpers/helpers';
import {GET_USER_COORDS_SUCCESS, GET_USER_COORDS_ERROR, SET_CUSTOM_COORDS, TOOLTIP_INIT} from 'constants/userConstants';

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

export const tooltipInit = (data) => {
  return ({
    type: TOOLTIP_INIT,
    data
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


