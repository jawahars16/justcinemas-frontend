import * as filter from "../../app/actions/filter";

describe("Filter Action", () => {
  it("Check whether locationChanged action returning correct object", () => {
    const actionObject = filter.locationChanged("Pune");
    expect(actionObject).toEqual({ type: "LOCATION_CHANGED", payload: "Pune" });
  });

  it("Check whether languageChanged action returning correct object", () => {
    const actionObject = filter.languageChanged("English");
    expect(actionObject).toEqual({
      type: "LANGUAGE_CHANGED",
      payload: "English"
    });
  });
});
