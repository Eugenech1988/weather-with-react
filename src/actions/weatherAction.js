import {getDailyWeatherApi} from 'api/GET/dailyWeather';
import {geFiveDaysWeatherApi} from 'api/GET/fiveDaysWeather';
import {startLoading, finishLoading} from "./loaderAction";

import {
  GET_DAILY_WEATHER_ERROR,
  GET_DAILY_WEATHER_SUCCESS,
  GET_FIVE_DAYS_WEATHER_ERROR,
  GET_FIVE_DAYS_WEATHER_SUCCESS
} from 'constants/weatherConst';
import {FIVE_DAYS_COMPONENT_TOGGLE} from "../constants/weatherConst";

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
  geFiveDaysWeatherApi(lat, lng)
    .then(res => {
      console.log(res);
      dispatch(getFiveDaysWeatherSuccess(res.data));
    })
    .catch(err => {
      console.log(err);
      dispatch(getFiveDaysWeatherError());
    });
};

export const getAllWeather = (lat,lng) => dispatch => {
  dispatch(startLoading());
  geFiveDaysWeatherApi(lat, lng)
    .then(res => {
      console.log(res);
      dispatch(getFiveDaysWeatherSuccess(res.data));
    })
    .catch(err => {
      console.log(err);
      dispatch(getFiveDaysWeatherError());
    });
  getDailyWeatherApi(lat, lng)
    .then(res => {
      console.log(res);
      dispatch(getDailyWeatherSuccess(res.data));
      dispatch(finishLoading());
    })
    .catch(err => {
      console.log(err);
      dispatch(getDailyWeatherError());
    });
};

export const forecastToggle = (data) => {
  return ({
    type: FIVE_DAYS_COMPONENT_TOGGLE,
    data
  });
};
