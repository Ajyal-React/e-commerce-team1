import {FaBars} from 'react-icons/fa'
import styled from 'styled-components'
import { StyledUl } from "../../Global.Style";

export const StyledUlNav = styled(StyledUl)`

  @media only screen and (max-width: 768px){
    display: none;
  }
`;
export const SelectLang = styled.div`

  @media only screen and (max-width: 768px){
    display: none;
  }
`;
export const Bars = styled(FaBars)`
  color: red;
  display: none;
  @media only screen and (max-width: 768px){
    display: block;
  }
`;