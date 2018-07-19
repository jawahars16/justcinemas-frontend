import axios from "axios";
import changeCase from "change-case";
import slug from "slug";

export const FETCH_MOVIES_PROGRESS = "FETCH_MOVIES_PROGRESS";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";

const fetchMoviesInProgress = {
  type: FETCH_MOVIES_PROGRESS
};

const movieDataFetched = data => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: data
});

const movieDataFetchFailure = {
  type: FETCH_MOVIES_FAILURE
};

const fetchMovies = (path, lang, loc) => {
  return async dispatch => {
    dispatch(fetchMoviesInProgress);
    try {
      const movies = await axios.get(
        `http://localhost:9090/movies/${path}?language=${lang}&location=${loc}`
      );
      dispatch(movieDataFetched(movies.data));
    } catch (error) {
      dispatch(movieDataFetchFailure);
    }
  };
};

export default fetchMovies;
