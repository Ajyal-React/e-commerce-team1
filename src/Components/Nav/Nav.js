import React from "react";
import UserControlBar from './UserControlBar'
import { StyledUl, Container, FlexBox, StyledButton } from "../../Global.Style";
import { Bars, StyledUlNav, SelectLang, Li } from "./Nav.Style";
import { Link } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";

function Nav() {
  const userIsLoggedIn = localStorage.getItem('token')
  return (
    <nav>
      <Container>
        <FlexBox className="nav-bar">
        <Bars>
          <FaBars />
        </Bars>
          <SelectLang>
            <FlexBox >
              <select>
                <option value="English">English</option>
                <option value="Arabic">Arabic</option>
              </select>
              <FaSearch />
            </FlexBox>
          </SelectLang>
          <StyledUlNav>
            <FlexBox>
              <Li>
                <Link style={{textDecoration: "none"}} to="/">Home</Link>
              </Li>
              <Li>New arrival</Li>
              <Li>
                <Link style={{textDecoration: "none"}} to="/Details">Mobiles</Link>
              </Li>
            </FlexBox>
          </StyledUlNav>
          <img src="/Images/logo.png" alt="logo" />

          <StyledUlNav>
            <FlexBox>
              <Li>
                <Link style={{textDecoration: "none"}} to="/laptops">Laptops</Link>
              </Li>
              <Li>HeadPhones</Li>
              <Li>Accessories</Li>
            </FlexBox>
          </StyledUlNav>
          
          {userIsLoggedIn?  <UserControlBar />
          :
          <Link to="/signup">
            <StyledButton borderRadius="3rem" bgColor="#F9F8F8" color="#FA7400">
              Sign In
            </StyledButton>
          </Link>
          }
        </FlexBox>
      </Container>
    </nav>
  );
}

export default Nav;
