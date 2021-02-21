import React from "react";
import "./SearchedMovies.css";

function SearchedMovies({ title, movies }) {
  return (
    <div className="row">
      <h2 className="title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className="row__poster"
            key={movie.id}
            src={`${movie.Poster}`}
            alt=""
          />

          // <h1>{movie.name}</h1>
        ))}
      </div>
    </div>
  );
}

export default SearchedMovies;
