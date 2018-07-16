import React from 'react';
import MovieGrid from '../movies/MovieGrid';

const Home = () => (
  <div className="container">
    <MovieGrid />
  </div>  
);

Home.defaultProps = {};

export default Home;