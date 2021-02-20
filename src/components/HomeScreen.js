import React from "react";
import "./HomeScreen.css";
import Nav from "./Nav";
import Row from "./Row";
import Banner from "./Banner";
import requests from "../api/Requests";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row title="Movies" fetchUrl={requests.fetchMovies} />
      <Row title="TV Shows" fetchUrl={requests.fetchTvShows} />
      <Row title="Released in 2021" fetchUrl={requests.fetchNewIn2021} />
      <Row title="Newly Released" fetchUrl={requests.fetchNewlyRealeased} />
    </div>
  );
}

export default HomeScreen;
