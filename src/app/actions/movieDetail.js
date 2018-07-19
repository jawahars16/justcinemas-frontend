import axios from 'axios';

export const FETCH_MOVIE_DETAIL_PROGRESS = "FETCH_MOVIE_DETAIL_PROGRESS";
export const FETCH_MOVIE_DETAIL_SUCCESS = "FETCH_MOVIE_DETAIL_SUCCESS";
export const FETCH_MOVIE_DETAIL_FAILURE = "FETCH_MOVIE_DETAIL_FAILURE";

const fetchMovieDetailInProgress = {
  type: FETCH_MOVIE_DETAIL_PROGRESS
};

const movieDetailFetched = data => ({
  type: FETCH_MOVIE_DETAIL_SUCCESS,
  payload: data
});

const movieDetailFetchFailure = {
  type: FETCH_MOVIE_DETAIL_FAILURE
};

const fetchMovieDetail = id => {
  return async dispatch => {
    dispatch(fetchMovieDetailInProgress);
    try {
      const movieDetail = await axios.get(`http://localhost:9090/movie/${id}`);
      dispatch(movieDetailFetched(movieDetail.data));
    } catch (error) {
      dispatch(movieDetailFetchFailure);
    }
  };
};

export default fetchMovieDetail;