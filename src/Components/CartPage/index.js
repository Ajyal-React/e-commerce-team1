import React from "react";
import {
  MainSection,
  FlexBoxCenter,
  StyledLink,
  OrdersContainer,
  BtnDiv,
  OrdersSection,
  StyledBtn,
} from "./Cart.style";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { StyledParagraph } from "../../Global.Style";
import CartOrder from "./CartOrder";

function Cart() {
  return (
    <MainSection>
      <OrdersContainer>
        <FlexBoxCenter>
          <StyledLink to="/details">
            <HiOutlineArrowNarrowLeft size="2rem" color="#A1A9B7" />
            <StyledParagraph color="#646363">
              Return to the product details
            </StyledParagraph>
          </StyledLink>
        </FlexBoxCenter>
        <OrdersSection>
          <CartOrder />
        </OrdersSection>

        <BtnDiv>
          <Link to="/payment">
            <StyledBtn bgColor="#fa7400">Go to payment</StyledBtn>
          </Link>
        </BtnDiv>
      </OrdersContainer>
    </MainSection>
  );
}

export default Cart;
