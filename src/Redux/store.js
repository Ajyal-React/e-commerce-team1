import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {userReducer} from './user/reducers';

const allReducers = combineReducers({
  user: userReducer
});

const initialStore = {
  user: JSON.parse(localStorage.getItem('user')) || {}
}

const store = createStore(
  allReducers,
  initialStore,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;

