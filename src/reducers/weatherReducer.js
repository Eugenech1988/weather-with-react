import {
	GET_DAILY_WEATHER_SUCCESS,
	GET_DAILY_WEATHER_ERROR,
	GET_FIVE_DAYS_WEATHER_ERROR,
	GET_FIVE_DAYS_WEATHER_SUCCESS,
	FIVE_DAYS_COMPONENT_TOGGLE
} from 'constants/weatherConst';

const initialState = {
	dailyWeather: null,
	fiveDaysWeather: null,
	forecastToggle: false
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
		case FIVE_DAYS_COMPONENT_TOGGLE:
			return {...state, forecastToggle: !state.forecastToggle};
		default:
			return state;
	}
};
