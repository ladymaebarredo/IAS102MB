// MovieDetails.jsx

import React from 'react';

const MovieDetails = ({ selectedMovie }) => {
  if (!selectedMovie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details">
      <h1>{selectedMovie.Title}</h1>
      <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
      <p>{selectedMovie.Type}</p>
      <p>{selectedMovie.Year}</p>
      <p>{selectedMovie.Genre}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default MovieDetails;
