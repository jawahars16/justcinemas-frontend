import React from 'react';

const Header = () => (
  <nav className="navbar navbar-light navbar navbar-dark bg-primary justify-content-between">
    <a className="navbar-brand" href="/">Navbar</a>

    <form class="form-inline">
        <select className="form-control mr-sm-2">
          <option>Select Language</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>

        <select className="form-control mr-sm-2">
          <option>Select Location</option>
          <option value="Pune">Pune</option>
          <option value="Delhi">Delhi</option>
          <option value="Bangalore">Bangalore</option>
        </select>
    </form>
  </nav>
);

Header.defaultProps = {};

export default Header;
 