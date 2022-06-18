import React from "react";
import {
  StyledUl,
  Container,
  FlexBox,
  StyledParagraph,
  StyledAnchor,
  Center,
} from "../../Global.Style";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsHandbagFill } from "react-icons/bs";
// import { Link } from "react-router-dom";HiLockClosed
import "./NavTwo.css";

import { FaSearch } from "react-icons/fa";

function NavTwo() {
  return (
    <nav>
      <Container>
        <FlexBox className="nav-bar">
          <FlexBox>
            <select>
              <option value="English">English</option>
              <option value="Arabic">Arabic</option>
            </select>
            <FaSearch />
          </FlexBox>
          <StyledUl>
            <FlexBox>
              <li>
                <StyledAnchor href="#">Home</StyledAnchor>
              </li>
              <li>
                <StyledAnchor href="#">New arrival</StyledAnchor>
              </li>
              <li>
                <StyledAnchor href="#">Mobiles</StyledAnchor>
              </li>
            </FlexBox>
          </StyledUl>
          <img src="/Images/logo.png" alt="logo" />

          <StyledUl>
            <FlexBox>
              <li>
                <StyledAnchor href="#">Laptops</StyledAnchor>
              </li>
              <li>
                <StyledAnchor href="#">HeadPhones</StyledAnchor>
              </li>
              <li>
                <StyledAnchor href="#">Accessories</StyledAnchor>
              </li>
            </FlexBox>
          </StyledUl>

          <FlexBox className="icons-section">
            <AiOutlineHeart />
            <AiOutlineUser />
            <StyledParagraph>0.00$</StyledParagraph>
            <Center className="bag-icon">
              <BsHandbagFill />
              <Center className="counter">
                <StyledParagraph fontSize="14px">0</StyledParagraph>
              </Center>
            </Center>
          </FlexBox>
        </FlexBox>
      </Container>
    </nav>
  );
}

export default NavTwo;
