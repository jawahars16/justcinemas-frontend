import React from 'react';
import PropTypes from 'prop-types';

const MovieItem = ({ name, slug, poster, experiences}) => {
  return (
    <div className="col-2 card">
      <img className="card-img-top" alt={name} src={poster} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{experiences}</p>
       </div>
    </div>
  )
}


MovieItem.defaultProps = {};

MovieItem.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  experiences: PropTypes.string.isRequired
};

export default MovieItem;
