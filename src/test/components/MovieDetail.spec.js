import React from "react";
import { shallow } from "enzyme";
import MovieDetail from "../../app/components/MovieDetail";

describe("MovieDetail component", () => {
  it("Should render movie detail", () => {
    const props = {
      fetching: false,
      error: false,
      data: { name: "Test movie" }
    };
    const node = shallow(<MovieDetail detail={props} />);
    expect(node.find("h3.text-primary").text()).toEqual(props.data.name);
  });

  it("Should render loading...", () => {
    const props = {
      fetching: true,
      error: false,
      data: { }
    };
    const node = shallow(<MovieDetail detail={props} />);
    expect(node.find("div").text()).toEqual("Loading...");
  });

  it("Should render error...", () => {
    const props = {
      fetching: false,
      error: true,
      data: { }
    };
    const node = shallow(<MovieDetail detail={props} />);
    expect(node.find("div").text()).toEqual("Error...");
  });
});
