import React from "react";
import UserControlBar from "./UserControlBar";
import { Container, FlexBox, StyledButton } from "../../Global.Style";
import { NavBar , Bars, StyledUlNav, SelectLang, Li, NavLink } from "./Nav.Style";
import { FaSearch, FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";
function Nav() {
  const isLoggedIn = useSelector((state) => state.user.token);
  return (
    <NavBar >
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
              <Li>
                <NavLink to="/">
                  Home
                </NavLink>
              </Li>
              <Li>New arrival</Li>
              <Li>
                <NavLink to="/Details">
                  Mobiles
                </NavLink>
              </Li>
            </FlexBox>
          </StyledUlNav>
          <img src="/Images/logo.png" alt="logo" />

          <StyledUlNav>
            <FlexBox>
              <Li>
                <NavLink to="/laptops">
                  Laptops
                </NavLink>
              </Li>
              <Li>HeadPhones</Li>
              <Li>Accessories</Li>
            </FlexBox>
          </StyledUlNav>

          {isLoggedIn ? (
            <UserControlBar />
          ) : (
            <NavLink to="/signup">
              <StyledButton
                borderRadius="3rem"
                bgColor="#F9F8F8"
                color="#FA7400"
              >
                Sign In
              </StyledButton>
            </NavLink>
          )}
        </FlexBox>
      </Container>
    </NavBar >
  );
}

export default Nav;
