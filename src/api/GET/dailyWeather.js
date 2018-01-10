import axios from 'axios';
import {DAILY_WEATHER_URL} from '../urls';

const WEATHER_API_KEY = '&APPID=74912ffa2afea93eca5527c7013a6f9b';

const request = axios.create({
  timeout: 1200000
});

export const getDailyWeatherApi = (lat, lng) => {
   return request.get(DAILY_WEATHER_URL + `lat=${lat}&lon=${lng}` + WEATHER_API_KEY);
};
