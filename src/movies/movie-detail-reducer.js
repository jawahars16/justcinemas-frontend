import * as actions from './movie-detail-actions';

const reducer = (state = { fetching: false, data: {} }, action) => {
  switch(action.type) {
    case actions.FETCH_MOVIE_DETAIL_PROGRESS: return {...state, fetching: true };
    case actions.FETCH_MOVIE_DETAIL_SUCCESS: return {...state, fetching: false, data: action.payload };
    case actions.FETCH_MOVIE_DETAIL_FAILURE: return {...state, fetching: false, error: false }
    default: return {...state}
  }
}

export default reducer;