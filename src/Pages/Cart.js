import React from "react";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import CartPage from "../Components/CartPage";
import { MainContainer } from '../Global.Style'
function Cart() {
  return (
    <MainContainer>
      <Nav />
      <CartPage />
      <Footer />
    </MainContainer>
  );
}

export default Cart;