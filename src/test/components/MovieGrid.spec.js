import React from "react";
import { shallow } from "enzyme";
import MovieGrid from "../../app/components/MovieGrid";
import MovieItem from "../../app/components/MovieItem";


describe("MovieGrid component", () => {
  it("Should render loading... on progress", () => {
    const props = { movies: {fetching: true}, fetchMovies: jest.fn() };
    const node = shallow(<MovieGrid {...props} />);
    expect(node.find("div").text()).toEqual("Loading...");
  });

  it("Should render error... on failure", () => {
    const props = { movies: {fetching: false, error: true}, fetchMovies: jest.fn() };
    const node = shallow(<MovieGrid {...props} />);
    expect(node.find("div").text()).toEqual("Error...");
  });

  it("Should render no movies found on empty dataset", () => {
    const props = { movies: {fetching: false, items: []}, fetchMovies: jest.fn()};
    const node = shallow(<MovieGrid {...props} />);
    expect(node.find("h3").text()).toEqual("No Movies found !!!");
  });

  it("Should render movies on success", () => {
    const props = { movies: {fetching: false, items: [1, 2, 3]}, fetchMovies: jest.fn() };
    const node = shallow(<MovieGrid {...props} />);
    expect(node.find(MovieItem)).toHaveLength(3);
  });
});
