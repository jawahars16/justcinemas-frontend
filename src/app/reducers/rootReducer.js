import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import movies from "./movieList";
import detail from "./movieDetail";
// import upcomingmovies from "../upcoming/reducer";
import filter from "./filter";
const rootReducer = combineReducers({
  movies,
  // upcomingmovies,
  detail,
  filter,
  routing: routerReducer
});

export default rootReducer;
