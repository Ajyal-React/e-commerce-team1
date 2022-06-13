import React from "react";
import Nav from "../../src/Components/Nav/Nav";
import Hero from "../Components/HomePage/Hero/Hero";
import "../index.css";
import { MainContainer } from "../Global.Style";
import Categories from "../Components/HomePage/Categories/Categories";
function Home() {
  return (
    <div>
      <MainContainer>
        <Nav />
        <Hero />
        <Categories />
      </MainContainer>
    </div>
  );
}

export default Home;