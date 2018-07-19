import React from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";

const MovieItem = props => {
  return (
    <div
      className="col-sm-2"
      style={{ marginBottom: 10, cursor: "pointer", padding: 10 }}
    >
      <Link
        className="card shadow"
        to={`/movie/${props.id}`}
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
            id="movie-name"
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
      </Link>
    </div>
  );
};

export default MovieItem;
