import {GET_USER_COORS_SUCCESS, GET_USER_COORS_ERROR} from 'constants/userConstants';

const initialState = {
	lat: 42.5047926,
	lng: 27.4626361
};

export const userDetails = (state = initialState, action) => {
	switch (action.type) {
		case GET_USER_COORS_SUCCESS:
			return { ...state, lat: action.lat, lng: action.lng};
		case GET_USER_COORS_ERROR:
			return {...state};
		default:
			return state;
	}
};

