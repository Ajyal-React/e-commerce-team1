import React from "react";
import {
  Container,
  FlexBoxCol,
  StyledHeading,
  StyledButton,
  StyledParagraph,
} from "../../Global.Style";
import "./Hero.css";
import { FaAngleDoubleRight, FaAngleDown } from "react-icons/fa";

function Hero() {
  return (
    <div className="wrapper">
      <div className="black-paper"></div>
      <Container>
        <article>
          <FlexBoxCol>
            <StyledHeading fontSize="3rem">playstation 5</StyledHeading>
            <StyledParagraph color="#fff" fontSize='1.2rem'>
              lighting-fast download speed with super-fast ssd storage
            </StyledParagraph>
            <StyledButton borderRadius='.5rem'>Start Shopping <FaAngleDoubleRight /></StyledButton>
          </FlexBoxCol>
        </article>
      </Container>
          <div className="down-arrow"><FaAngleDown /></div>
    </div>
  );
}

export default Hero;
