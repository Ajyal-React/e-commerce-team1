import React from "react";
import { StyledUl, Container, FlexBox, StyledButton } from "../../Global.Style";
import { Bars, StyledUlNav, SelectLang } from "./Nav.Style";
import { Link } from "react-router-dom";
import "./Nav.css";

import { FaSearch, FaBars } from "react-icons/fa";

function Nav() {
  return (
    <nav>
      <Container>
        <FlexBox className="nav-bar">
        <Bars>
          <FaBars />
        </Bars>
          <SelectLang>
            <FlexBox>
              <select>
                <option value="English">English</option>
                <option value="Arabic">Arabic</option>
              </select>
              <FaSearch />
            </FlexBox>
          </SelectLang>
          <StyledUlNav>
            <FlexBox>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>New arrival</li>
              <li>
                <Link to="/Details">Mobiles</Link>
              </li>
            </FlexBox>
          </StyledUlNav>
          <img src="/Images/logo.png" alt="logo" />

          <StyledUlNav>
            <FlexBox>
              <li>
                <Link to="/laptops">Laptops</Link>
              </li>
              <li>HeadPhones</li>
              <li>Accessories</li>
            </FlexBox>
          </StyledUlNav>
          <Link to="/signup">
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
