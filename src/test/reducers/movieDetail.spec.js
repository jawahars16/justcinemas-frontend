import movieDetail from "../../app/reducers/movieDetail";
import {
  FETCH_MOVIE_DETAIL_PROGRESS,
  FETCH_MOVIE_DETAIL_SUCCESS,
  FETCH_MOVIE_DETAIL_FAILURE
} from "../../app/actions/movieDetail";

describe("Movie detail", () => {
  it("Should return default state", () => {
    const initialState = { fetching: false, data: {} };
    const defaultState = movieDetail(initialState, {});
    expect(defaultState).toEqual(initialState);
  });
  it("Should return correct state for movieDetailProgress", () => {
    const state = movieDetail(
      { data: {} },
      { type: FETCH_MOVIE_DETAIL_PROGRESS }
    );
    expect(state).toEqual({ fetching: true, data: {} });
  });

  it("Should return correct state for movieDetailSuccess", () => {
    const state = movieDetail(
      {},
      { type: FETCH_MOVIE_DETAIL_SUCCESS, payload: { id: "100" } }
    );
    expect(state).toEqual({ fetching: false, data: { id: "100" } });
  });

  it("Should return correct state for movieDetailFailure", () => {
    const state = movieDetail({}, { type: FETCH_MOVIE_DETAIL_FAILURE });
    expect(state).toEqual({ fetching: false, error: true });
  });
});
