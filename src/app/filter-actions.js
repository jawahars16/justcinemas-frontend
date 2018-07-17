export const LOCATION_CHANGED = "LOCATION_CHANGED";
export const LANGUAGE_CHANGED = "LANGUAGE_CHANGED";

export const locationChanged = location => ({
  type: LOCATION_CHANGED,
  payload: location
});

export const languageChanged = language => ({
  type: LANGUAGE_CHANGED,
  payload: language
});
