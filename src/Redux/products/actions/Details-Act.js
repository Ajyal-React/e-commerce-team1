import axios from "axios";
import { DETAILS, LOADING } from "../productType";

export const DetailsAct = (value) => {
	return async (dispatch) => {
		dispatch({
            type: LOADING,
            loading: true,
        });
		try {		
			const res = await axios.get(
				`https://omar-tech-store.herokuapp.com/api/products/${value}`
			);
			dispatch({
				type: DETAILS,
				payload: res.data,
				loading: false,

			});
		} catch (error) {}
	};
};
