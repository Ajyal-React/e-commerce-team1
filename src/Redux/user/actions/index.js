import axios from "axios";
import { USER_SIGN_IN, USER_SIGN_UP } from "../userTypes";

export const SignInAction = (values) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				"https://omar-tech-store.herokuapp.com/api/users/login",
				values
			);

			localStorage.setItem("user", JSON.stringify(res.data));
			dispatch({
				type: USER_SIGN_IN,
				payload: res.data,
				loader:true
			});
		} catch ({ response }) {
			dispatch({
				type: USER_SIGN_IN,
				payload: response,
			});
		}
	};
};

export const SignUpAction = (values) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				"https://omar-tech-store.herokuapp.com/api/users/signup",
				values
			);

			localStorage.setItem("user", JSON.stringify(res.data));
			dispatch({
				type: USER_SIGN_UP,
				payload: res.data,
				
			});
		} catch ({ response }) {
			dispatch({
				type: USER_SIGN_UP,
				payload: response,
			});
		}
	};
};
