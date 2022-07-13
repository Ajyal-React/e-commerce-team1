import React from "react";
import { StyledParagraph, Center } from "../../Global.Style";
import { IconSection, NavLink } from "./Nav.Style";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsHandbagFill } from "react-icons/bs";
function UserControlBar() {
  return (
    <IconSection>
      <AiOutlineHeart />
      <NavLink to="/profile">
        <AiOutlineUser />
      </NavLink>
      <StyledParagraph>0.00$</StyledParagraph>
      <Center className="bag-icon">
        <NavLink to="/mycart">
          <BsHandbagFill />
        </NavLink>
        <Center className="counter">
          <StyledParagraph fontSize="14px">0</StyledParagraph>
        </Center>
      </Center>
    </IconSection>
  );
}

export default UserControlBar;
