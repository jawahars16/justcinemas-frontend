import React, { Component } from "react";
import PropTypes from "prop-types";
import MovieItem from "./MovieItem";

class MovieGrid extends Component {
  componentDidMount() {
    console.log("Mount");
    console.log(this.props.filter);
    this.props.fetchMovies(
      this.props.filter.language,
      this.props.filter.location
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.type !== this.props.match.params.type) {
      this.props.fetchMovies(
        this.props.filter.language,
        this.props.filter.location
      );
    }
  }

  render() {
    if (this.props.movies.fetching) {
      return this.showProgress();
    }
    if (this.props.movies.items && this.props.movies.items.length === 0) {
      return this.showEmptyMoviesPlaceHolder();
    }

    return this.props.movies.error ? this.showError() : this.showMovies();
  }

  showMovies() {
    return (
      <div>
        <div className="row">
          {this.props.movies.items.map(({ id, name, poster, experience }) => (
            <MovieItem
              key={id}
              id={id}
              name={name}
              poster={poster}
              experience={experience}
            />
          ))}
        </div>
      </div>
    );
  }

  showProgress() {
    return <div>Loading...</div>;
  }

  showError() {
    return <div>Error...</div>;
  }

  showEmptyMoviesPlaceHolder() {
    return (
      <div className="text-center">
        <h3>No Movies found !!!</h3>
      </div>
    );
  }
}

MovieGrid.defaultProps = {
  movies: {
    items: []
  }
};

MovieGrid.propTypes = {
  movies: PropTypes.shape({
    items: PropTypes.array
  })
};

export default MovieGrid;
