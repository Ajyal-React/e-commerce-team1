import axios from "axios";
import { FEATURED, LOADING } from "../productType";

export const FeaturedAct = (value) => {
	return async (dispatch) => {
		dispatch({
            type: LOADING,
            loading: true,
        });
		try {		
			const res = await axios.get(
				`https://omar-tech-store.herokuapp.com/api/products/featured-categories?category=${value}`
			);
			dispatch({
				type: FEATURED,
				payload: res.data,
				loading: false,

			});
		} catch (error) {}
	};
};
