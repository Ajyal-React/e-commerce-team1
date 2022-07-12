import styled from "styled-components";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

import { StyledButton } from "../../Global.Style";
export const MainSection = styled.section`
  width: 100%;
  min-height: 100vh;
  margin: auto;
  margin-top: 3.9rem;
  padding-top: 1rem;
  @media only screen and (max-width: 768px) {
  }
`;

export const FlexBoxCenter = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OrdersContainer = styled.div`
  min-height: 75vh;
  width: 85vw;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
`;
export const OrdersSection = styled.div`
  min-height: 68vh;
  margin-top: 1rem;
`;
export const BtnDiv = styled.div`
  height: 40px;
  display: flex;
  justify-content: flex-end;
`;
export const StyledBtn = styled(StyledButton)`
    @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Order = styled.div`
  height: 100px;
  width: 100%;
  border: 1px solid #aaaaaa;
  background-color: #fdfdfd;
  display: flex;
`;
export const LeftSection = styled.div`
  height: inherit;
  width: 90%;
`;
export const RightSection = styled.div`
  height: inherit;
  width: 10%;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: space-around;
  }
`;
export const SpaceBetween = styled.div`
  display: flex;
  height: inherit;
  justify-content: space-between;
  align-items: center;
`;

export const Cross = styled(ImCross)`
  color: #d21010;
  cursor: pointer;
`;
export const OrderDetails = styled(FlexBoxCenter)`
  height: inherit;
  width: 50%;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`;
export const ImgDiv = styled(FlexBoxCenter)`
  width: 100px;
  height: 100px;
  height: inherit;
  & img {
    width: 100%;
    height: 100%;
  }
`;
export const ControlDiv = styled(FlexBoxCenter)`
  justify-content: space-between;
  width: 60%;
  height: inherit;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
  }
`;
export const Quantity = styled(FlexBoxCenter)`
  justify-content: space-around;
  width: 40%;
  height: inherit;
`;
export const InputNumber = styled.input`
  border: 1px solid #aaaaaa;
  border-radius: .5rem;
  width: 35px;
  height: 35px;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  };
  outline: none;
  text-align: center;
`;

export const Plus = styled(BsPlus)`
  cursor: pointer;
  font-size: 1.5rem;
`;
export const Minus = styled(BiMinus)`
  cursor: pointer;
  font-size:1.4rem;
`;
