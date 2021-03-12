import comediconAPI from "../../apis/comediconAPI";

export const getJokes = () => async dispatch => {
	const response = await comediconAPI.get("/posts");
	try {
		console.log(response.data);
	} catch (error) {
		console.log(error.response.data.message);
	}
};
