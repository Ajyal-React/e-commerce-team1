import axios from "axios";
import {  LOADING,FEATURED_PRODUCT} from "../productType";

export const feturedProduct = () => {
    return async (dispatch) => {
      dispatch({
        type: LOADING,
        loading: true,
      });
      try {
        const res = await axios.get(
          "https://omar-tech-store.herokuapp.com/api/products/featured-products"
        );
        // localStorage.setItem("user", JSON.stringify(res.data));
        dispatch({
          type: FEATURED_PRODUCT,
          payload: res.data,
          loading: false,

        });
      } catch (error) {
        console.log("error", error);
      }
    };
  };
