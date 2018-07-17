import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from '../movies/reducer';
import detail from '../movies/movie-detail-reducer';

const rootReducer = combineReducers({
  movies,
  detail,
  routing: routerReducer,
});

export default rootReducer;