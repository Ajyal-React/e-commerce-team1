import React from "react";
import {FlexBox, StyledButton, StyledSubHeading } from "../../../Global.Style";
import "./Discount.css";


function Discount() {
  return (
    <div className="discount-sec">
      <div className="black-paper"></div>
      <div className="discount-content">
      <FlexBox>
      <StyledSubHeading fontSize="1.5rem">Get 50% off</StyledSubHeading>
      <StyledButton borderRadius='.5rem' bgColor="transparent" color='#fff'>Start Shopping</StyledButton>
      </FlexBox>
      </div>
    </div>
  );
}

export default Discount;