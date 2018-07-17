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
      <div className="col-sm-2" style={{ marginBottom: 10, cursor: 'pointer', padding: 10 }}>
        <div
          className="card shadow"
          onClick={() => {
            this.nextPath(`/movie/${this.props.id}`);
          }}
          style={{ padding: 0, height: 320 }}
        >
          <img
            className="card-img-top"
            style={{height:230}}
            alt={this.props.name}
            src={this.props.poster}
          />
          <div className="card-body">
            <div style={{whiteSpace: 'noWrap', textOverflow: 'ellipsis', overflow: 'hidden'}}>
            {this.props.name}
            </div>
            <small className="card-text">{this.props.experience}</small>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MovieItem);
