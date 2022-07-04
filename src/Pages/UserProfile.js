import React from "react";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import UserInfo from "../Components/UserProfilePage/UserInfo";
import UserControlSideBarV from "../Components/UserProfilePage/UserControlSideBarV";
import UserControlBarH from "../Components/UserProfilePage/UserControlSideBarH"
import UserOrders from "../Components/UserProfilePage/UserOrders";
import { MainContainer } from "../Global.Style";
import {TopSection, MainContainerUser } from "../Components/UserProfilePage/Profile.Style"
const UserProfile = () => {
  return (
 
    <MainContainer>
        <TopSection>
        <Nav />
        <UserInfo />
        <UserControlBarH />
        </TopSection>
        <MainContainerUser>
        <UserControlSideBarV/>
        <UserOrders />
        </MainContainerUser>
      <Footer />
      </MainContainer>
    
  );
};

export default UserProfile;
