import React, { useEffect, useState } from "react";
import "./MovieList.css";
import axios from "../api/axios";

function MovieList({ title, fetchUrl, favouriteComponent }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.Search);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <>
            <div className="row__poster">
              <div className="favourite">
                <favourite-component />
              </div>
              <img
                className="poster-img"
                key={movie}
                src={`${movie.Poster}`}
                alt=""
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
