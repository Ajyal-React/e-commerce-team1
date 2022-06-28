import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {userReducer} from './user/reducers';
import {productReducer} from './products/reducers'



const allReducers = combineReducers({
  user: userReducer,
  product: productReducer
});

const initialStore = {
  user: JSON.parse(localStorage.getItem('user')) || {}
}
const middleWare = [thunk];
const store = createStore(
  allReducers,
  initialStore,
  applyMiddleware(...middleWare)
);
export default store;

