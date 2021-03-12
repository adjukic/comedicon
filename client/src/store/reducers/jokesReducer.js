import { GET_JOKES_FAIL, GET_JOKES_REQUEST, GET_JOKES_SUCCESS } from "../constants/jokesConstants";

const jokesReducer = (state = { jokes: [] }, action) => {
	switch (action.type) {
		case GET_JOKES_REQUEST:
			return { loading: true, jokes: [] };
		case GET_JOKES_SUCCESS:
			return { loading: false, jokes: action.payload };
		case GET_JOKES_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export default jokesReducer;
