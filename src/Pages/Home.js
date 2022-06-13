import React from "react";
import Nav from "../../src/Components/Nav/Nav";
import Hero from "../Components/HomePage/Hero/Hero";
import Discount from "../Components/HomePage/Discount/Discount";
import "../index.css";
import { MainContainer } from "../Global.Style";
function Home() {
  return (
    <div>
      <MainContainer>
        <Nav />
        <Hero />
        <Discount />
      </MainContainer>
    </div>
  );
}

export default Home;