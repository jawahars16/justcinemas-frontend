import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
// = ({ id, name, slug, poster, experiences })
class MovieItem extends React.Component {
  nextPath(path) {
    this.props.history.push(path);
  }
  render() {
    return (
      <div className="col-sm-2" style={{ marginBottom: 10 }}>
        <div
          className="card shadow"
          onClick={() => {
            this.nextPath(`/movie/${this.props.id}`);
          }}
          style={{ padding: 0 }}
        >
          <img
            className="card-img-top"
            alt={this.props.name}
            src={this.props.poster}
          />
          <div className="card-body">
            <h6 className="card-title">{this.props.name}</h6>
            <small className="card-text">{this.props.experiences}</small>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MovieItem);
