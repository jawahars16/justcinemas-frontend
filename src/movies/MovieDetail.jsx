import fetchDetail from "./movie-detail-actions";
import React, { Component } from "react";
import { connect } from "react-redux";

class MovieDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDetail(this.props.match.params.id);
  }

  showMovies() {
    return (
      <div className="container">
        <h3>{this.props.detail.data.name}</h3>
        <p className="text-muted"> {this.props.detail.data.language}</p>
        <iframe width="100%" height="345" src="https://www.youtube.com/embed/WGByijP0Leo" />
        <p />
        <h5>Synopsis</h5>
        <p>
          {this.props.detail.data.synopsis}
        </p>
        <h5>
          Genre <small>{this.props.detail.data.genre}</small>
        </h5>
        <h5>
          Crew <small>O{this.props.detail.data.actors}</small>
        </h5>
        <h5>
           Images
        </h5>
        <div className="row">
            {[1, 2, 3, 4, 5, 6].map(()=> <img className="col-sm-2" style={{height: 200}} src={this.props.detail.data.poster}/>)}
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

  render() {
    if (this.props.detail.fetching) {
      return this.showProgress();
    }

    return this.props.detail.error || false
      ? this.showError()
      : this.showMovies();
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
