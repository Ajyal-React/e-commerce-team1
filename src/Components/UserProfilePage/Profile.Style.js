import styled from "styled-components";
import { MainContainer, FlexBox, StyledUl } from "../../Global.Style";
import { Link } from "react-router-dom";
export const MainContainerUser = styled(MainContainer)`
  height: 100vh;
  margin-top: 14.1rem;
  width: 100%;
  display: flex;
  border: 1px solid #ddd;
  @media only screen and (max-width: 768px) {
    margin-top: 32rem;
  }
`;

export const UserInformation = styled(FlexBox)`
  height: 100%;
  width: 100vw;
  margin-top: 59px;

  background: rgb(225, 223, 210);
  background: linear-gradient(
    78deg,
    rgba(225, 223, 210, 1) 0%,
    rgba(189, 217, 215, 1) 23%,
    rgba(255, 255, 255, 1) 100%
  );
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    height: 400px;
    margin-top: -20px;
  }
`;
export const TopSection = styled(MainContainer)`
  position: fixed;
  z-index: 1;
  background-color: #fff;
`;

export const FlexBoxUserInfo = styled(FlexBox)`
  height: inherit;
  margin: 5px;
  width: 70%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const FlexBoxContactInfo = styled(FlexBox)`
  height: 160px;
  width: 70%;
  margin: auto;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ContactDetails = styled(FlexBox)`
  flex-direction: column;
  width: 50%;
  height: inherit;
  margin: auto;
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;
export const ContactDetailsInner = styled(FlexBox)`
  width: 90%;
  height: inherit;

  @media only screen and (max-width: 768px) {
  }
`;

export const ProfileImgDiv = styled.div`
  height: 160px;
  width: 160px;
  border-radius: 50%;
  position: fixed;
  left: 25%;
  top: 8rem;
  @media only screen and (max-width: 768px) {
    height: 100px;
    width: 100px;
    top: 20rem;
    left: 1rem;
  }
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const ControlSideBarV = styled.div`
  width: 23%;
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  border-right: 1px solid #ddd;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const StyledUlProfile = styled(StyledUl)`
  align-items: stretch;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  & a {
    color: #646363;
  }
  &:last-child {
    color: red;
  }
  & a:last-child {
    color: red;
    margin-top: 7rem;
  }
  & a:not(:last-child) {
    margin-bottom: -10rem;
  }
`;
export const ControlSideBarH = styled.div`
  display: none;
  margin-top: -2rem;
  @media only screen and (max-width: 768px) {
    display: block;
    margin-top: 3rem;
  }
`;
export const StyledUlProfileH = styled(StyledUl)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & li {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    margin: 5px;
    font-size: 14px;
  }
  & li:hover {
    background-color: #f6921e;
    color: #fff;
  }
  & li:hover::before {
    width: 0px;
  }
`;
export const ListItem = styled.li`
  width: 100%;
  display: inline-block;
  height: 3rem;
  text-align: center;
  cursor: pointer;
  &:hover::before,
  &:focus::before {
    content: "";
    display: block;
    width: 8px;
    height: 3rem;
    background-color: #f6921e;
    position: absolute;
    left: 0px;
  }
`;

export const DisplayControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 1rem;
  width: 70%;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: auto;
  padding: 25px 55px;
  @media only screen and (max-width: 768px) {
  }
`;
export const Order = styled.div`
  width: 400px;
  height: 110px;
  border: 1px solid #ddd;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & img {
    height: 100%;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
`;
