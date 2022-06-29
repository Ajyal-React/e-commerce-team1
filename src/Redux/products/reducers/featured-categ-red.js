import { FEATURED, LOADING } from "../productType";
const initial = {
  data: [],
  loading: false,
};
export const FeaturedRed = (state = initial, action) => {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case FEATURED: {
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
