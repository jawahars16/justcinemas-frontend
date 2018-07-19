import fetchDetail from "../actions/movieDetail";
import React, { Component } from "react";
import MovieDetail from "../components/MovieDetail";
import { connect } from "react-redux";


const mapPropsToState = (state) => {
  return {
    detail: state.detail
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchDetail: () => dispatch(fetchDetail(ownProps.match.params.id))
  }
}
export default connect(mapPropsToState, mapDispatchToProps)(MovieDetail);
