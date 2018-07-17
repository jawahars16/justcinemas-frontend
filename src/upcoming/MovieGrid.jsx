import React, { Component } from "react";
import PropTypes from "prop-types";
import MovieItem from "../movies//MovieItem";
import { connect } from "react-redux";
import fetchMovies from "./actions";

class UPMovieGrid extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    if (this.props.upcomingmovies.fetching) {
      return this.showProgress();
    }

    return this.props.upcomingmovies.error || false
      ? this.showError()
      : this.showMovies();
  }

  showMovies() {
    return (

      <div className="row">
        {this.props.upcomingmovies.items.map(({ id, name, slug, poster, experiences }) => (
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

UPMovieGrid.defaultProps = {
  movies: {
    items: []
  }
};

UPMovieGrid.propTypes = {
  upcomingmovies: PropTypes.shape({
    items: PropTypes.array
  })
};

export default connect(
  state => ({
    upcomingmovies: state.upcomingmovies
  }),
  dispatch => ({
    fetchMovies: () => dispatch(fetchMovies())
  })
)(UPMovieGrid);
