import React, { Component } from "react";

const showProgress = () => <div>Loading...</div>;
const showError = () => <div>Error...</div>;
const showDetail = props => (
  <div className="container">
    <h3 className="text-primary">{props.detail.data.name}</h3>
    <p className="text-muted"> {props.detail.data.language}</p>
    <iframe
      width="100%"
      height="345"
      src="https://www.youtube.com/embed/WGByijP0Leo"
    />
    <p />
    <h5 className="text-primary">Synopsis</h5>
    <p>{props.detail.data.synopsis}</p>
    <h5>
      <span className="text-primary">Genre</span>{" "}
    </h5>
    <p>{props.detail.data.genre}</p>
    <h5>
      <span className="text-primary">Crew </span>
    </h5>
    <p>{props.detail.data.actors}</p>
    <h5 className="text-primary">Images</h5>
    <div className="row">
      {[1, 2, 3, 4, 5, 6].map(() => (
        <img
          className="col-sm-2"
          style={{ height: 200 }}
          src={props.detail.data.poster}
        />
      ))}
    </div>
  </div>
);

const MovieDetail = props => {
  if (props.detail.fetching) {
    return showProgress();
  }

  return props.detail.error ? showError() : showDetail(props);
};

export default MovieDetail;
