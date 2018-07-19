import React, { Component } from "react";


class MovieDetail extends Component {
  componentDidMount() {
    this.props.fetchDetail();
  }

  render() {
    if (this.props.detail.fetching) {
      return this.showProgress();
    }
    return this.props.detail.error ? this.showError() : this.showDetail();
  }

  showProgress() {
    return(
      <div>Loading...</div>
    );
  }

  showError() {
    return(
      <div>Error...</div>
    );
  }

  showDetail() {
    return (
      <div className="container">
        <h3 className="text-primary">{this.props.detail.data.name}</h3>
        <p className="text-muted"> {this.props.detail.data.language}</p>
        <iframe
          width="100%"
          height="345"
          src="https://www.youtube.com/embed/WGByijP0Leo"
        />
        <p />
        <h5 className="text-primary">Synopsis</h5>
        <p>{this.props.detail.data.synopsis}</p>
        <h5>
          <span className="text-primary">Genre</span>{" "}
        </h5>
        <p>{this.props.detail.data.genre}</p>
        <h5>
          <span className="text-primary">Crew </span>
        </h5>
        <p>{this.props.detail.data.actors}</p>
        <h5 className="text-primary">Images</h5>
        <div className="row">
          {[1, 2, 3, 4, 5, 6].map(() => (
            <img
              className="col-sm-2"
              style={{ height: 200 }}
              src={this.props.detail.data.poster}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default MovieDetail;
