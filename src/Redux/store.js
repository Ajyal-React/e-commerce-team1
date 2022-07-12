import { createStore, combineReducers, applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import { HeroReducer } from "./products/reducers/HeroReduc";
import { FeaturedRed } from "./products/reducers/featured-categ-red";
import { userReducer } from "./user/reducers";
import { TrendingRed } from "./products/reducers/Trending-Red";
import { DetailsRed } from "./products/reducers/Details-Red";
import { productReducer } from "./products/reducers/productReducer";

const allReducers = combineReducers({
  user: userReducer,
  Hero : HeroReducer,
  Featured : FeaturedRed,
  Trending : TrendingRed,
  Details : DetailsRed,
  productReducer: productReducer

});


const initialStore = {
  user: JSON.parse(localStorage.getItem("user")) || {},
};

const store = createStore(
  allReducers,
  initialStore,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
