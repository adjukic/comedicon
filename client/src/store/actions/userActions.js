import comediconAPI from "../../apis/comediconAPI";
import { REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS } from "../constants/userConstants";

export const registerUser = registerData => async dispatch => {
	try {
		dispatch({ type: REGISTER_REQUEST });
		const response = await comediconAPI({
			method: "post",
			url: "/register",
			data: registerData,
		});
		console.log(response.data);
		dispatch({ type: REGISTER_SUCCESS, message: "You are logged in successfully!" });
	} catch (err) {
		console.log(err);
		dispatch({ type: REGISTER_FAIL, message: err?.response?.data.message });
	}
};
