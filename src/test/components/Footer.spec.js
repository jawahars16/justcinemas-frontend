import React from "react";
import { shallow } from "enzyme";
import Footer from "../../app/components/Footer";

describe("Footer component", () => {
  it("Should have two links", () => {
    const node = shallow(<Footer />);
    expect(node.find("a")).toHaveLength(2);
  });
});
