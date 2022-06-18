import React from "react";
import {
  RightSectionSign,
  FlexBoxCol,
  Input,
  StyledButton,
  Center,
  StyledParagraph,
} from "../../Global.Style";
import { Link } from "react-router-dom";

import "./SignStyle.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IconContext } from "react-icons";
function RightSection() {
  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <RightSectionSign>
        <div className="form-sec">
          <form action="" method="post">
            <h3>SIGN UP</h3>
            <FlexBoxCol className="input-sec email-input">
              <label htmlFor="">&#9993; Email</label>
              <Input type="email" placeholder="John@example.com;" />
            </FlexBoxCol>
            <FlexBoxCol className="input-sec">
              <label htmlFor=""></label>
              <Input type="password" placeholder="  &#128274; Password" />
            </FlexBoxCol>
            <FlexBoxCol className="input-sec">
              <label htmlFor=""></label>
              <Input
                type="password"
                placeholder="  &#128274; Confirm Password"
              />
            </FlexBoxCol>
            <StyledButton color="#707070">
              <Center>
                SIGN UP
                <FaLongArrowAltRight />
              </Center>
            </StyledButton>
          </form>
          <div>
          <Link to = '/Login'>
            <StyledParagraph color="#707070" fontSize="15px"  margin = "35px">Already member? <span>
              Sign in</span>
              </StyledParagraph>
              </Link>
          </div>
        </div>
      </RightSectionSign>
    </IconContext.Provider>
  );
}

export default RightSection;
