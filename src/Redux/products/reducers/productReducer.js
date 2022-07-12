import { object } from "yup";
import { LOADING, FEATURED_PRODUCT } from "../productType";
const initial = {
  data: [],
  loading: false,
};

// export const productReducer = (
  
//   state = {
//     product: {},
//   },
//   action
// ) => {
//   switch (action.type) {
//     case FEATURED_PRODUCT:
//       return { ...state, product: action.payload };
//     default:
//       return state;
//   }
// };
export const productReducer = (state = initial, action) => {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case FEATURED_PRODUCT: {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
};

