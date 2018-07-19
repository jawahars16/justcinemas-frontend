import React, { Component } from "react";
import { connect } from "react-redux";
import fetchMovies from "../actions/movieList";
import MovieGrid from "../components/MovieGrid";


const mapPropsToComponent = (state, props) => ({
  movies: state.movies,
  filter: state.filter,
  path: props.path
});
const mapDispatchToProps = dispatch => ({
  fetchMovies: (path, lang, loc) => dispatch(fetchMovies(path, lang, loc))
})



export default connect(mapPropsToComponent, mapDispatchToProps)(MovieGrid);
