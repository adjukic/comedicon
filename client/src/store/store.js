import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import jokesReducer from "./reducers/jokesReducer";
import userReducer from "./reducers/userReducer";

const reducer = combineReducers({
	userReducer: userReducer,
	jokesReducer: jokesReducer,
});

const initialState = {};

const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;