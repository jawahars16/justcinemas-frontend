import React, { Component } from "react";
import MovieItem from "./MovieItem";

const showProgress = () => <div>Loading...</div>;
const showError = () => <div>Error...</div>;

const showEmptyMoviesPlaceHolder = () => (
  <div className="text-center">
    <h3>No Movies found !!!</h3>
  </div>
);

const showMovies = data => (
  <div className="row">
    {data.map(({ id, name, poster, experience }) => (
      <MovieItem
        key={id}
        id={id}
        name={name}
        poster={poster}
        experience={experience}
      />
    ))}
  </div>
);

const MovieList = props => {
  if (props.movies.fetching) {
    return showProgress();
  }

  if (props.movies.items.length === 0) {
    return showEmptyMoviesPlaceHolder();
  }

  return props.movies.error ? showError() : showMovies(props.movies.items);
};

export default MovieList;
