import React from "react";
import LaptopsPage from "../Components/LaptopsPage/LaptopsPage";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";

import { MainContainer } from "../Global.Style";

const Laptops = () => {
  return (
    <div>
      <MainContainer>
        <Nav />
        <LaptopsPage />
      </MainContainer>
      <Footer />
    </div>
  );
};

export default Laptops;
