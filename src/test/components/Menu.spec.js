import React from "react";
import { shallow } from "enzyme";
import Menu from "../../app/components/Menu";
import { NavLink } from "react-router-dom";

describe("Menu component", () => {
  it("Should render 2 links", () => {
    const node = shallow(<Menu />);
    expect(node.find(NavLink)).toHaveLength(2);
  });
});
