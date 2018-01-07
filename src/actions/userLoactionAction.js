import {startLoading, finishLoading} from 'actions/loaderAction';
import {getPosition} from 'helpers/helpers';

export const getUserPosition = () => dispatch => {
  dispatch(startLoading());
  getPosition()
    .then((position) => {
      console.log(position);
      dispatch(finishLoading());
    })
    .catch((err) => {
      console.error(err.message);
      dispatch(finishLoading());
    });
};
