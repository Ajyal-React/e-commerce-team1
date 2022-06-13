import React from "react";
import Nav from "../../src/Components/Nav/Nav";
import Hero from "../Components/HomePage/Hero/Hero";
import Discount from "../Components/HomePage/Discount/Discount";
import Products from "../Components/HomePage/Products/Products";
import "../index.css";
import { MainContainer } from "../Global.Style";
function Home() {
  return (
    <div>
      <MainContainer>
        <Nav />
        <Hero />
        <Discount />
        <Products />
      </MainContainer>
    </div>
  );
}

export default Home;