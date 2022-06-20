import React from "react";
import {
  StyledUl,
  Container,
  FlexBox,
  StyledButton,
  StyledAnchor,
} from "../../Global.Style";
import { Link } from "react-router-dom";
import "./Nav.css";

import { FaSearch } from "react-icons/fa";


function Nav() {
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
                <Link to='/'>
                <StyledAnchor href="#">Home</StyledAnchor>
                </Link>
              </li>
              <li>
                <StyledAnchor href="#">New arrival</StyledAnchor>
              </li>
              <li>
              <Link to= '/Details'>

<StyledAnchor href="#">Mobiles</StyledAnchor>
</Link>
              </li>
            </FlexBox>
          </StyledUl>
          <img src='/Images/logo.png' alt="logo" />

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
          <Link to= '/signup'>
          <StyledButton borderRadius="3rem" bgColor="#F9F8F8" color="#FA7400">
            Sign In
          </StyledButton>
          </Link>
        </FlexBox>
      </Container>
    </nav>
  );
}

export default Nav;
