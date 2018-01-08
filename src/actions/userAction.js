import {startLoading, finishLoading} from 'actions/loaderAction';
import {getPosition} from 'helpers/helpers';
import {GET_USER_COORS_SUCCESS, GET_USER_COORS_ERROR} from 'constants/userConstants';

export const getUserCoorsSuccess = (lat, lng) => {
  return ({
    lat,
    lng,
    type: GET_USER_COORS_SUCCESS
  });
};

export const getUserCoorsError = () => {
  return ({
    type: GET_USER_COORS_ERROR
  });
};

export const getUserPosition = () => dispatch => {
  dispatch(startLoading());
  getPosition()
    .then((position) => {
      console.log(position);
      const coords = position.coords;
      dispatch(getUserCoorsSuccess(coords.latitude, coords.longitude));
      dispatch(finishLoading());
    })
    .catch((err) => {
      console.error(err.message);
      dispatch(finishLoading());
      dispatch(getUserCoorsError());
    });
};


