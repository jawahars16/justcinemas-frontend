import React, { Component } from "react";
import PropTypes from "prop-types";
import MovieItem from "./MovieItem";
import { connect } from "react-redux";
import fetchMovies from "./actions";

class MovieGrid extends Component {
  componentDidMount() {
    this.props.fetchMovies(
      this.props.filter.language,
      this.props.filter.location
    );
  }

  render() {
    if (this.props.movies.fetching) {
      return this.showProgress();
    }

    if(this.props.movies.items.length === 0){
      return this.showEmptyMoviesPlaceHolder();
    }

    return this.props.movies.error || false
      ? this.showError()
      : this.showMovies();
  }

  showEmptyMoviesPlaceHolder() {
    return (
      <div className="text-center">
        <h3>No Movies found !!!</h3>
      </div>
    );
  }

  showMovies() {
    return (
      <div className="row">
        {this.props.movies.items.map(
          ({ id, name, slug, poster, experience }) => (
            <MovieItem
              key={name}
              id={id}
              name={name}
              slug={slug}
              poster={poster}
              experience={experience}
            />
          )
        )}
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
    movies: state.movies,
    filter: state.filter
  }),
  dispatch => ({
    fetchMovies: (lang, loc) => dispatch(fetchMovies(lang, loc))
  })
)(MovieGrid);
