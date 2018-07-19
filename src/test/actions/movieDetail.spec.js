
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import fetchMovieDetail, { FETCH_MOVIE_DETAIL_PROGRESS, FETCH_MOVIE_DETAIL_SUCCESS, FETCH_MOVIE_DETAIL_FAILURE } from '../../../src/app/actions/movieDetail';

const mockStore = configureMockStore([thunk])
const mock = new MockAdapter(axios);
let store;
const apiData = { "id": 1, "name": "Kabali", "experiences": "RDX, Dolby Atmos, SUB", "listingType": "NOW_SHOWING", "slug": "kabali" };


describe("movie-detail/actions", () => {
  beforeEach(() => {
    store = mockStore({})
  });

  it('should fetch movie detail from server', async () => {
    mock
      .onGet('http://localhost:9090/movies/1')
      .reply(200, apiData);

    let expectedActions = []
    
    store.dispatch(fetchMovieDetail(1)).then(() => {
      expect(store.getActions()[0]).toEqual({ type: FETCH_MOVIE_DETAIL_PROGRESS });
      expect(store.getActions()[1]).toEqual({
        type: FETCH_MOVIE_DETAIL_SUCCESS,
        payload: apiData
      });
    });
  });

  it('should return FETCH_MOVIES_FAILURE if http 500', async () => {
    mock
      .onGet('http://localhost:9090/movies/1')
      .reply(500, {});
    let expectedActions = []
    store.dispatch(fetchMovieDetail(1)).then(() => {
      expect(store.getActions()[0]).toEqual({ type: FETCH_MOVIE_DETAIL_PROGRESS });
      expect(store.getActions()[1]).toEqual({ type: FETCH_MOVIE_DETAIL_FAILURE });
    });
  });
})
