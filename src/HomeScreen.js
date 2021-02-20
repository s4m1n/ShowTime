import React from "react";
import "./HomeScreen.css";
import Nav from "./Nav";
import Row from "./Row";
import Banner from "./Banner";

function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* Nav */}
      <Nav />
      {/* Banner */}
      <Banner></Banner>
      {/* Row */}
      <Row></Row>
    </div>
  );
}

export default HomeScreen;
