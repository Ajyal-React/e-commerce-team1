import axios from "axios";
import { HERO, LOADING } from "../productType";

export const HeroAct = () => {
	return async (dispatch) => {
		dispatch({
            type: LOADING,
            loading: true,
        });
		try {
			const res = await axios.get(
				"https://omar-tech-store.herokuapp.com/api/products/offers"
			);
			dispatch({
				type: HERO,
				payload: res.data,
				loading: false,

			});
		} catch (error) {}
	};
};
