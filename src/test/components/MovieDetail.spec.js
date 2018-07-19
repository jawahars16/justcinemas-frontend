import React from "react";
import { shallow } from "enzyme";
import MovieDetail from "../../app/components/MovieDetail";

describe("MovieDetail component", () => {
  it("Should render loading... on progress", () => {
    const props = {detail: {fetching: true} ,fetchDetail: jest.fn()};
    const node = shallow(<MovieDetail {...props} />);
    expect(node.find("div").text()).toEqual("Loading...");
  })

  it("Should render error...", () => {
    const detail = {
      fetching: false,
      error: true,
      data: { }
    };
    const props = {detail, fetching: false, fetchDetail: jest.fn()}
    const node = shallow(<MovieDetail {...props} />);
    expect(node.find("div").text()).toEqual("Error...");
  });

  it("Should render movie detail", () => {
    const detail = {
      fetching: false,
      error: false,
      data: { name: "Test movie" }
    };
    const props = {detail, fetchDetail: jest.fn()}
    const node = shallow(<MovieDetail {...props} />);
    expect(node.find("h3.text-primary").text()).toEqual(props.detail.data.name);
  });

});
