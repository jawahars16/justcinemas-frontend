import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import fetchMovies from "../actions/movieList";
import MovieListComponent from "../components/MovieList";

class MovieList extends Component {
  componentDidMount() {
    this.props.fetchMovies(
      this.props.path,
      this.props.filter.language,
      this.props.filter.location
    );
  }

  render() {
    console.log("Movie list rendered");
    console.log(this.props);
    return <MovieList movies={this.props.movies} />;
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
  (state, props) => ({
    movies: state.movies,
    filter: state.filter,
    path: props.path
  }),
  dispatch => ({
    fetchMovies: (path, lang, loc) => dispatch(fetchMovies(path, lang, loc))
  })
)(MovieGrid);
