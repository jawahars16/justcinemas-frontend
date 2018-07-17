import * as actions from "./filter-actions";

const initialLanguage = window.localStorage.getItem("language");
const initialLocation = window.localStorage.getItem("location");

const initialState = {
  language: initialLanguage == null ? "" : initialLanguage,
  location: initialLocation == null ? "" : initialLocation
};

const filter = (state = initialState, action) => {
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
