import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const navigate = (path, history) => {
  history.push(path);
};

const MovieItem = props => {
  return (
    <div
      className="col-sm-2"
      style={{ marginBottom: 10, cursor: "pointer", padding: 10 }}
    >
      <div
        className="card shadow"
        onClick={() => {
          navigate(`/movie/${props.id}`, props.history);
        }}
        style={{ padding: 0, height: 320 }}
      >
        <img
          className="card-img-top"
          style={{ height: 230 }}
          alt={props.name}
          src={props.poster}
        />
        <div className="card-body">
          <div
            style={{
              whiteSpace: "noWrap",
              textOverflow: "ellipsis",
              overflow: "hidden"
            }}
          >
            {props.name}
          </div>
          <small className="card-text">{props.experience}</small>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MovieItem);
