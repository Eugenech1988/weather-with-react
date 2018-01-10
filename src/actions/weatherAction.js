import {getDailyWeatherApi} from 'api/GET/dailyWeather';
import {geFiveDaysWeatherApi} from 'api/GET/fiveDaysWeather';

import {GET_DAILY_WEATHER_ERROR, GET_DAILY_WEATHER_SUCCESS} from 'constants/weatherConst';
import {GET_FIVE_DAYS_WEATHER_ERROR, GET_FIVE_DAYS_WEATHER_SUCCESS} from 'constants/weatherConst';

export const getDailyWeatherSuccess = (data) => {
  return ({
    type: GET_DAILY_WEATHER_SUCCESS,
    data
  });
};

export const getDailyWeatherError = (data) => {
  return ({
    type: GET_DAILY_WEATHER_ERROR,
    data
  });
};

export const getFiveDaysWeatherSuccess = (data) => {
  return ({
    type: GET_FIVE_DAYS_WEATHER_SUCCESS,
    data
  });
};

export const getFiveDaysWeatherError = (data) => {
  return ({
    type: GET_FIVE_DAYS_WEATHER_ERROR,
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

export const getFiveDaysWeather = (lat, lng) => dispatch => {
  geFiveDaysWeatherApi(lat,lng)
    .then(res => {
      console.log(res);
      dispatch(getFiveDaysWeatherSuccess());
    })
    .catch(err => {
    dispatch(getFiveDaysWeatherError());
    });
};
