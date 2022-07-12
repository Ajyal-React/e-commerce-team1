import styled from "styled-components";
import { FlexBox, Container, Center } from "../../Global.Style";
export const FlexBoxWrap = styled(FlexBox)`
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 2rem;
`;
export const FlexBoxCategories = styled(FlexBox)`
  width: 80%;
  margin: auto;
`;
export const CategoriesContainer = styled(Container)`
  padding: 94px 0;
  margin-top: 2rem;
`;
export const CategoriesCard = styled.div`
  min-width: 330px;
  min-height: 436px;
  background-color: #f9f8f8;
  border-radius: 5px;
  position: relative;
`;
export const ImgDiv = styled(FlexBoxCategories)`
  height: 325px;
  width: 325px;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
export const HeartIcon = styled(Center)`
  position: absolute;
  top: 30px;
  right: 30px;
  color: #e6e6e6;
  cursor: pointer; ;
`;
