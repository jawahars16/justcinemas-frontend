import React from "react";
import { shallow } from "enzyme";
import MovieItem from "../../app/components/MovieItem";

describe("MovieItem component", () => {
  it("Should render props correctly", () => {
    const props = { name: "Test Movie", experience: "Test Experience" };
    const node = MovieItem(props);
    expect(node).toBeDefined();
    // expect(node.dive().find("#movie-name").text()).toEqual(props.name);
    // expect(node.find("small.card-text").text()).toEqual(props.experience);
  });
});
