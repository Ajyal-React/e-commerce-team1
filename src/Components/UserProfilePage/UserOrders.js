import React from "react";
import { DisplayControls, Order } from './Profile.Style';
import {StyledParagraph, StyledPrice } from "../../Global.Style"
const UserOrders = () => {
  return (
    <DisplayControls>
      <Order >
          <img src="Images/bag.png" alt="bag" />
          <StyledParagraph font-weight="bold">Laptop Bag</StyledParagraph>
          <StyledPrice color="#2BB377">85$</StyledPrice>
      </Order>
      <Order >
          <img src="Images/bag.png" alt="bag" />
          <StyledParagraph font-weight="bold">Laptop Bag</StyledParagraph>
          <StyledPrice color="#2BB377">85$</StyledPrice>
      </Order>
      <Order >
          <img src="Images/bag.png" alt="bag" />
          <StyledParagraph font-weight="bold">Laptop Bag</StyledParagraph>
          <StyledPrice color="#2BB377">85$</StyledPrice>
      </Order>
      <Order >
          <img src="Images/bag.png" alt="bag" />
          <StyledParagraph font-weight="bold">Laptop Bag</StyledParagraph>
          <StyledPrice color="#2BB377">85$</StyledPrice>
      </Order>
      <Order >
          <img src="Images/bag.png" alt="bag" />
          <StyledParagraph font-weight="bold">Laptop Bag</StyledParagraph>
          <StyledPrice color="#2BB377">85$</StyledPrice>
      </Order>
      <Order >
          <img src="Images/bag.png" alt="bag" />
          <StyledParagraph font-weight="bold">Laptop Bag</StyledParagraph>
          <StyledPrice color="#2BB377">85$</StyledPrice>
      </Order>
    </DisplayControls>
  );
};
export default UserOrders;