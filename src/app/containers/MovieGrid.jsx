import React, { Component } from "react";
import { connect } from "react-redux";
import fetchMovies from "../actions/movieGrid";
import MovieGrid from "../components/MovieGrid";


const mapPropsToComponent = (state, props) => ({
  movies: state.movies,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchMovies: (lang, loc) => dispatch(fetchMovies(ownProps.match.params.type === 'upcoming', lang, loc))
})



export default connect(mapPropsToComponent, mapDispatchToProps)(MovieGrid);
