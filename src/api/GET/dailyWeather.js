import axios from 'axios';
import {DAILY_WEATHER_URL} from '../urls';

const WEATHER_API_KEY = '&APPID=980fe731c6ad0e78948f7b01b1e5a936';

const request = axios.create({
  timeout: 1200000
});

export const getDailyWeatherApi = (lat, lng) => {
  return request.get(DAILY_WEATHER_URL + `lat=${lat}&lon=${lng}` + WEATHER_API_KEY);
};
