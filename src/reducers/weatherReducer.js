import {GET_DAILY_WEATHER_SUCCESS, GET_DAILY_WEATHER_ERROR} from 'constants/weatherConst';
import {GET_FIVE_DAYS_WEATHER_ERROR, GET_FIVE_DAYS_WEATHER_SUCCESS} from 'constants/weatherConst';

const initialState = {
	dailyWeather: null,
	fiveDaysWeather: null
};

export const weather = (state = initialState, action) => {
	switch (action.type) {
		case GET_DAILY_WEATHER_SUCCESS:
			return {...state, dailyWeather: action.data};
		case GET_DAILY_WEATHER_ERROR:
			return {...state};
		case GET_FIVE_DAYS_WEATHER_SUCCESS:
			return {...state, fiveDaysWeather: action.data};
		case  GET_FIVE_DAYS_WEATHER_ERROR:
			return {...state};
		default:
			return state;
	}
};
