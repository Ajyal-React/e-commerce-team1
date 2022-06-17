import React from "react";
import {
  LeftSectionSign,
  FlexBoxColSpaceBetween,
  StyledParagraph ,
} from "../../Global.Style"
import {SignHeading, ImgContainer, SignImg, LogoImgContainer, LogoImg  } from '../SignPage/SignPage.Style'


function LeftSection({heading, discretion}) {
  return (
      <LeftSectionSign>
      <FlexBoxColSpaceBetween>
        <LogoImgContainer>
        <LogoImg src='/Images/black-logo.png' alt="logo"/>
        </LogoImgContainer>
        <div>
        <SignHeading fontSize = '35px'>{heading}</SignHeading>
        <StyledParagraph fontSize='1.5rem' color='#F3F3F3'>{discretion}</StyledParagraph>

        </div>
        <ImgContainer>
        <SignImg src='/Images/sign-image.png' alt="laptop"/>
        </ImgContainer>
      </FlexBoxColSpaceBetween>
      </LeftSectionSign>
  )
}

export default LeftSection;