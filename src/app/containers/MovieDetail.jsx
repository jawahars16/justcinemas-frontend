import fetchDetail from "../actions/movieDetail";
import React, { Component } from "react";
import MovieDetailComponent from "../components/MovieDetail";
import { connect } from "react-redux";

class MovieDetail extends Component {
  componentDidMount() {
    this.props.fetchDetail(this.props.match.params.id);
  }

  render() {
    return <MovieDetailComponent detail={this.props.detail} />;
  }
}

export default connect(
  state => ({
    detail: state.detail
  }),
  dispatch => ({
    fetchDetail: id => dispatch(fetchDetail(id))
  })
)(MovieDetail);
