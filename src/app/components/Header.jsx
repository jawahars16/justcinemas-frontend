import React from "react";
import Filter from "../containers/Filter";

const Header = props => {
  return (
    <nav className="navbar navbar-light bg-primary navbar-dark fixed-top">
      <a className="navbar-brand" href="/">
        Just Cinemas
      </a>
      <Filter />
    </nav>
  );
};

export default Header;
