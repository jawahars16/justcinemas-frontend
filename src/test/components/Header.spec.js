import React from "react";
import { shallow } from "enzyme";
import Header from "../../app/components/Header";

describe("Header component", () => {
  it("Should render Just Cinemas in header", () => {
    const node = shallow(<Header />);
    expect(node.find("a.navbar-brand").text()).toEqual("Just Cinemas");
  });
});
