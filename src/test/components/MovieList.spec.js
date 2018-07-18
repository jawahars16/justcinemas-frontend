import React from "react";
import { shallow } from "enzyme";
import MovieList from "../../app/components/MovieList";
import MovieItem from "../../app/components/MovieItem";

describe("MovieList component", () => {
  it("Should render loading... on progress", () => {
    const props = { fetching: true };
    const node = shallow(<MovieList movies={props} />);
    expect(node.find("div").text()).toEqual("Loading...");
  });

  it("Should render error... on failure", () => {
    const props = { fetching: false, error: true };
    const node = shallow(<MovieList movies={props} />);
    expect(node.find("div").text()).toEqual("Error...");
  });

  it("Should render no movies found on empty dataset", () => {
    const props = { fetching: false, items: [] };
    const node = shallow(<MovieList movies={props} />);
    expect(node.find("h3").text()).toEqual("No Movies found !!!");
  });

  it("Should render movies on success", () => {
    const props = { fetching: false, items: [1, 2, 3] };
    const node = shallow(<MovieList movies={props} />);
    expect(node.find(MovieItem)).toHaveLength(3);
  });
});
