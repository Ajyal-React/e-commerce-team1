import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { StyledUl, FlexBox } from "../../Global.Style";

export const NavBar = styled.nav`
  background-color: rgba(223, 222, 227, 0.79);
  position: fixed;
  width: 100%;
  z-index: 10000;
  top: 0;
`;
export const IconSection = styled(FlexBox)`
  flex-basis: 200px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const StyledUlNav = styled(StyledUl)`
  max-width: 30%;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const Li = styled.li`
  margin: 0 0.3rem;
  font-size: 14px;
`;
export const SelectLang = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const Bars = styled(FaBars)`
  color: red;
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
