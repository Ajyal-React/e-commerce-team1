import React from "react";
import { FlexBox, StyledParagraph, Center } from "../../Global.Style";
import { IconSection } from "./Nav.Style";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsHandbagFill } from "react-icons/bs";

function UserControlBar() {
  return (
    <IconSection>
      <AiOutlineHeart />
      <AiOutlineUser />
      <StyledParagraph>0.00$</StyledParagraph>
      <Center className="bag-icon">
        <BsHandbagFill />
        <Center className="counter">
          <StyledParagraph fontSize="14px">0</StyledParagraph>
        </Center>
      </Center>
    </IconSection>
  );
}

export default UserControlBar;
