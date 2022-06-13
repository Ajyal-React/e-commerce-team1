import React from "react";
import Nav from "../../src/Components/Nav/Nav";
import Hero from "../../src/Components/HomePage/Hero/Hero";
import "../index.css";
import { MainContainer } from "../Global.Style";
function Home() {
  return (
    <div>
      <MainContainer>
        <Nav />
        <Hero />
      </MainContainer>
    </div>
  );
}

export default Home;