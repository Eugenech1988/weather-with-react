import {getDailyWeatherApi} from 'api/GET/dailyWeather';
import {GET_DIALY_WEATHER_ERROR, GET_DIALY_WEATHER_SUCCESS} from 'constants/weatherConst';

export const getDailyWeatherSuccess = (data) => {
  return ({
    type: GET_DIALY_WEATHER_SUCCESS,
    data
  });
};

export const getDailyWeatherError = (data) => {
  return ({
    type: GET_DIALY_WEATHER_ERROR,
    data
  });
};

export const getDailyWeather = (lat, lng) => dispatch => {
  getDailyWeatherApi(lat, lng)
    .then(res => {
      console.log(res);
      dispatch(getDailyWeatherSuccess(res.data));
    })
    .catch(err => {
      console.log(err);
      dispatch(getDailyWeatherError());
    });
};
