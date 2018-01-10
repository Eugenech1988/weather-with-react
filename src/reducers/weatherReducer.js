import {GET_DIALY_WEATHER_SUCCESS, GET_DIALY_WEATHER_ERROR} from 'constants/weatherConst';

const initialState = {
	dialyWeather: []
};

export const weather = (state = initialState, action) => {
	switch (action.type) {
		case GET_DIALY_WEATHER_SUCCESS:
			return {...state, dialyWeather: action.data};
		case GET_DIALY_WEATHER_ERROR:
			return {...state};
		default:
			return state;
	}
};
