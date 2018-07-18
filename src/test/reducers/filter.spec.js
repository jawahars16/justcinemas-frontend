import filter from "../../app/reducers/filter";
import { locationChanged, languageChanged } from "../../app/actions/filter";
import localStorageMock from "../mock/localStorage";

describe("Filter reducer", () => {

  it("Should return correct default state.", () => {
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
    const initialState = { language: "", location: "" };
    const defaultState = filter(initialState, null);
    expect(defaultState).toEqual({ language: "", location: "" });
  });

  it("Should return correct state on location changed.", () => {
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
    const state = { language: "English", location: "Pune" };
    const nextState = filter(state, locationChanged);
    expect(nextState).toEqual({ language: "English", location: "Pune" });
  });


  it("Should return correct state on language changed.", () => {
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
    const state = { language: "Hindi", location: "Pune" };
    const nextState = filter(state, languageChanged);
    expect(nextState).toEqual({ language: "Hindi", location: "Pune" });
  });
});
