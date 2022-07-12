import React from "react";
import {
  UserInformation,
  FlexBoxUserInfo,
  FlexBoxContactInfo,
  ProfileImg,
  ProfileImgDiv,
  ContactDetails,
  ContactDetailsInner,
} from "./Profile.Style";
import { StyledParagraph } from "../../Global.Style";
import { FaUserAlt, FaEnvelope } from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdCall } from "react-icons/md";

const UserInfo = () => {
  return (
    <UserInformation>
      <FlexBoxUserInfo>
        <ProfileImgDiv>
          <ProfileImg src="/Images/people.svg" />
        </ProfileImgDiv>
        <FlexBoxContactInfo>
          <ContactDetails>
            <ContactDetailsInner>
              <FaUserAlt size={"20px"} color="#A1A9B7" />
              <StyledParagraph fontWeight="bold" fontSize="14px">User Name</StyledParagraph>
              <StyledParagraph fontSize="14px">Mahmoud Hammad</StyledParagraph>
            </ContactDetailsInner>
            <ContactDetailsInner>
              <BsFillBagCheckFill size={"20px"} color="#A1A9B7" />
              <StyledParagraph fontWeight="bold">Title</StyledParagraph>
              <StyledParagraph>NetWork Engineers</StyledParagraph>
            </ContactDetailsInner>
          </ContactDetails>
          <ContactDetails>
            <ContactDetailsInner>
              <FaEnvelope size={"20px"} color="#A1A9B7" />
              <StyledParagraph fontWeight="bold" fontSize="14px">Address</StyledParagraph>
              <StyledParagraph fontSize="14px">
                Mahmoud@Hammad.com
              </StyledParagraph>
            </ContactDetailsInner>
            <ContactDetailsInner>
              <MdCall size={"20px"} color="#A1A9B7" />
              <StyledParagraph fontWeight="bold" fontSize="14px">Cell-Phone</StyledParagraph>
              <StyledParagraph fontSize="14px">Mahmoud Hammad</StyledParagraph>
            </ContactDetailsInner>
          </ContactDetails>
        </FlexBoxContactInfo>
      </FlexBoxUserInfo>
    </UserInformation>
  );
};
export default UserInfo;
