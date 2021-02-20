import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.Search);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  console.log(movies);
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

export default Row;
