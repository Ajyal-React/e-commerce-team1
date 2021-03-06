import React from "react";
import Nav from "../../src/Components/Nav/Nav";
import Hero from "../Components/HomePage/Hero/Hero";
import Discount from "../Components/HomePage/Discount/Discount";
import Products from "../Components/HomePage/Products/Products";
import Trending from "../Components/HomePage/Trending/Trending";
import Footer from "../Components/Footer/Footer";
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
        <Discount />
        <Products />
        <Trending />
        <Footer />
      </MainContainer>
    </div>
  );
}

export default Home;
