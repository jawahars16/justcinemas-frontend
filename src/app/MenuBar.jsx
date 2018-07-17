import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
  }

  nextPath(path) {
    this.props.history.push(path);
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-5" />
        <div className=" col-lg-2">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className={`btn btn-primary  ${
                window.location.pathname == "/" ? "active" : ""
              }`}
              onClick={() => this.nextPath("/")}
            >
              Now Showing
            </button>
            <button
              type="button"
              className={`btn btn-primary  ${
                window.location.pathname == "/upcoming-movie" ? "active" : ""
              }`}
              onClick={() => this.nextPath("/upcoming-movie")}
            >
              Coming Soon
            </button>
          </div>
        </div>
        <div className="col-lg-5" />
      </div>
    );
  }
}

export default withRouter(MenuBar);
