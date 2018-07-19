import * as actions from "../actions/filter";
import storage from "../util/storage";

const initialState = storage();

const filter = (state = initialState, action) => {
  if (null == action) return state;

  switch (action.type) {
    case actions.LOCATION_CHANGED:
      return { ...state, location: action.payload };
    case actions.LANGUAGE_CHANGED:
      return { ...state, language: action.payload };
    default:
      return { ...state };
  }
};

export default filter;
