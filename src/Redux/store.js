import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { HeroReducer } from "./products/reducers/HeroReduc";
import { FeaturedRed } from "./products/reducers/featured-categ-red";
import {userReducer} from './user/reducers';
import { TrendingRed } from "./products/reducers/Trending-Red";
import { DetailsRed } from "./products/reducers/Details-Red";

const allReducers = combineReducers({
  user: userReducer,
  Hero : HeroReducer,
  Featured : FeaturedRed,
  Trending : TrendingRed,
  Details : DetailsRed
});

const initialStore = {
  user: JSON.parse(localStorage.getItem('user')) || {}
}

const store = createStore(
  allReducers,
  initialStore,
applyMiddleware(thunk)
);

export default store;

