import React from "react";
import { NavLink } from "react-router-dom";

const Menu = props => {
  return (
    <div
      class="btn-group"
      role="group"
      aria-label="Basic example"
      style={{ marginLeft: 12, marginBottom: 20 }}
    >
      <NavLink exact to='/' className='btn btn-primary' activeClassName="active" >
        Now Showing
      </NavLink>
      <NavLink exact to='/upcoming' className='btn btn-primary' activeClassName="active" >
        Upcoming
      </NavLink>
    </div>
  );
};

export default Menu;
