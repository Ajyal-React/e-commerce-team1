import styled from "styled-components";
import { FlexBox, FlexBoxCol, StyledButton } from "../../Global.Style";
export const SignHeading = styled.h1`
  color: #fff;
  text-transform: capitalize;
  font-size: ${({ fontSize }) => fontSize};
`;
export const ImgContainer = styled.div`
  width: 350px;
  height: 350px;
`;
export const SignImg = styled.img`
  width: auto;
  height: 100%;
`;
export const ConfirmPassDiv = styled.div`
  display: flex;
  position: relative;
`;
export const ForgetBtn = styled(StyledButton)`
  background-color: transparent;
  position: absolute;
  right: 0;
  top: 20px;
  color: #22b9ff;
  letter-spacing: 0.7px;
  &:hover {
    font-weight: bold;
    color: #000000;
    margin-right: 1.2rem;
  }
`;
export const LogoImgContainer = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 1rem;
`;
export const LogoImg = styled.img`
  width: auto;
  height: 100%;
`;
export const FlexBoxSign = styled(FlexBox)`
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Input = styled.input`
  outline: none;
  width: 100%;
  border: none;
  height: 40px;
  display: inline-block;
`;

export const InputWrapper = styled(FlexBoxCol)`
  color: #b9b9b9;
  background-color: #fff;
  box-shadow: 0px 12px 20px #00000014;
  margin: 0.8rem 0;
  transition: all 0.1s ease-in-out;
  padding: 2px;
  position: relative;
  left: -16px;
  width: 100%;
  &:focus-within {
    border: #f6921e;
    border-left: 8px solid #f6921e !important;
  }
`;
