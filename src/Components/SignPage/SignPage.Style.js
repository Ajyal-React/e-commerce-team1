import styled from "styled-components";
import { FlexBox } from "../../Global.Style";
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
  
  @media only screen and (max-width: 768px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;