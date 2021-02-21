import React, { useState, useEffect } from "react";
import "./HomeScreen.css";
import Nav from "./Nav";
import Row from "./Row";
import Banner from "./Banner";
import SearchedMovies from "./SearchedMovies";
import requests from "../api/Requests";
import axios from "../api/axios";
import Footer from "./Footer/Footer";

function HomeScreen() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  const getMovieByTitle = async (searchValue) => {
    const request = await axios.get(`?s=${searchValue}&apikey=thewdb`);
    const movies = request.data.Search;
    console.log(movies);
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
      <Row title="Movies" fetchUrl={requests.fetchMovies} />
      <Row title="TV Shows" fetchUrl={requests.fetchTvShows} />
      <Row title="Released in 2021" fetchUrl={requests.fetchNewIn2021} />
      <Row title="Newly Released" fetchUrl={requests.fetchNewlyRealeased} />
      <Footer />
    </div>
  );
}

export default HomeScreen;
