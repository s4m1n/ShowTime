import React, { useState, useEffect } from "react";
import "./HomeScreen.css";
import Nav from "../components/Nav/Nav";
import MovieList from "../components/MovieList";
import Banner from "../components/Banner";
import SearchedMovies from "../components/SearchedMovies";
import requests from "../api/Requests";
import axios from "../api/axios";
import Footer from "../components/Footer/Footer";
import AddFavourites from "../components/AddFavourites";

function HomeScreen() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  const getMovieByTitle = async (searchValue) => {
    const request = await axios.get(
      `?s=${searchValue}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    const movies = request.data.Search;
    if (movies) {
      setMovies(movies);
    } else {
      setMovies([]);
    }
  };

  useEffect(() => {
    getMovieByTitle(searchValue);
  }, [searchValue]);
  return (
    <div className="homeScreen">
      <Nav searchValue={searchValue} setSearchValue={setSearchValue} />
      {movies.length > 0 ? (
        <SearchedMovies title="Your Search Result" movies={movies} />
      ) : (
        <Banner />
      )}
      <MovieList
        title="Favourites"
        fetchUrl={requests.fetchMovies}
        favouriteComponent={AddFavourites}
      />
      <MovieList title="Movies" fetchUrl={requests.fetchMovies} />
      <MovieList title="TV Shows" fetchUrl={requests.fetchTvShows} />
      <MovieList title="Released in 2021" fetchUrl={requests.fetchNewIn2021} />
      <MovieList
        title="Newly Released"
        fetchUrl={requests.fetchNewlyRealeased}
      />
      <Footer />
    </div>
  );
}

export default HomeScreen;
