import React from "react";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import PaymentPage from "../Components/PaymentPage";
import { MainContainer } from "../Global.Style";
function Payment() {
  return (
    <MainContainer>
      <Nav />
      <PaymentPage />
      <Footer />
    </MainContainer>
  );
}

export default Payment;
