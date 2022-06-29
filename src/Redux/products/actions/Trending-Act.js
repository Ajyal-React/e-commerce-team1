import axios from "axios";
import { LOADING, TRENDING } from "../productType";

export const TrendingAct = () => {
  return async (dispatch) => {
    dispatch({
      type: LOADING,
      loading: true,
    });
    try {
      const res = await axios.get(
        "https://omar-tech-store.herokuapp.com/api/products/trending-products"
      );
      dispatch({
        type: TRENDING,
        payload: res.data,
        loading: false,
      });
    } catch (error) {}
  };
};
