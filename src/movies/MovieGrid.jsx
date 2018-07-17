import React, { Component } from "react";
import PropTypes from "prop-types";
import MovieItem from "./MovieItem";
import { connect } from "react-redux";
import fetchMovies from "./actions";

class MovieGrid extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    if (this.props.movies.fetching) {
      return this.showProgress();
    }

    return this.props.movies.error || false
      ? this.showError()
      : this.showMovies();
  }

  showMovies() {
    return (
      <div className="row">
        {this.props.movies.items.map(({ id, name, slug, poster, experiences }) => (
          <MovieItem
            key={name}
            id={id}
            name={name}
            slug={slug}
            poster={poster}
            experiences={experiences}
          />
        ))}
      </div>
    );
  }

  showProgress() {
    return <div>Loading...</div>;
  }

  showError() {
    return <div>Error...</div>;
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

export default connect(
  state => ({
    movies: state.movies
  }),
  dispatch => ({
    fetchMovies: () => dispatch(fetchMovies())
  })
)(MovieGrid);
