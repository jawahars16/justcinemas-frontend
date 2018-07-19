import movieGrid from "../../app/reducers/movieGrid";
import {
  FETCH_MOVIES_PROGRESS,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE
} from "../../app/actions/movieGrid";

describe("movieGrid reducer", () => {
  it("Should return default state", () => {
    const initialState = { fetching: false, items: [] };
    const defaultState = movieGrid(initialState, {});
    expect(defaultState).toEqual(initialState);
  });

  it("Should return correct state on progress", () => {
    const initialState = { fetching: false };
    const defaultState = movieGrid(initialState, {
      type: FETCH_MOVIES_PROGRESS
    });
    expect(defaultState).toEqual({ fetching: true });
  });

  it("Should return correct state on success", () => {
    const initialState = { fetching: true, items: [] };
    const defaultState = movieGrid(initialState, {
      type: FETCH_MOVIES_SUCCESS,
      payload: [1, 2, 3]
    });
    expect(defaultState).toEqual({ fetching: false, items: [1, 2, 3] });
  });

  it("Should return correct state on failure", () => {
    const initialState = { fetching: true };
    const defaultState = movieGrid(initialState, {
      type: FETCH_MOVIES_FAILURE
    });
    expect(defaultState).toEqual({ fetching: false, error: true });
  });
});
