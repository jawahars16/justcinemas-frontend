import * as actions from './filter-actions';

const filter = (state = { language: "", location: "" }, action) => {
  switch(action.type) {
    case actions.LOCATION_CHANGED: return {...state, location: action.payload };
    case actions.LANGUAGE_CHANGED: return {...state, language: action.payload };
    default: return {...state}
  }
}

export default filter;