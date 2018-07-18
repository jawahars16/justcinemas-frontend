import React from "react";

const Menu = props => {
  return (
    <div
      class="btn-group"
      role="group"
      aria-label="Basic example"
      style={{ marginLeft: 12, marginBottom: 20 }}
    >
      <button
        type="button"
        className={`btn btn-primary  ${
          window.location.pathname == "/" ? "active" : ""
        }`}
        onClick={() => props.onClickNowShowing()}
      >
        Now Showing
      </button>
      <button
        type="button"
        className={`btn btn-primary  ${
          window.location.pathname == "/upcoming-movie" ? "active" : ""
        }`}
        onClick={() => props.onClickUpcoming()}
      >
        Coming Soon
      </button>
    </div>
  );
};

export default Menu;
