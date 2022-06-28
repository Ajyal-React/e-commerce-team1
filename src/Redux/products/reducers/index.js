import { FEATURED_PRODUCT } from "../productType";

export const productReducer = (state = "", action) => {
  switch (action.type) {
    case FEATURED_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};
