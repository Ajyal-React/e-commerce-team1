import { LOADING, TRENDING } from "../productType";
const initial = {
  data: [],
  loading: false,
};
export const TrendingRed = (state = initial, action) => {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case TRENDING: {
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
