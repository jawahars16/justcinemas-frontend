import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import movies from "./movieGrid";
import detail from "./movieDetail";

import filter from "./filter";
const rootReducer = combineReducers({
  movies,
  detail,
  filter,
  routing: routerReducer
});

export default rootReducer;
