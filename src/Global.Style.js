import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100vw;
  max-width: 1920px;
  margin: 0 auto;
  overflow: hidden;
`;

export const Container = styled.div`
  width: 80%;
  margin: auto;
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FlexBoxCol = styled(FlexBox)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

export const StyledUl = styled.ul`
  list-style: none;
`;
export const StyledHeading = styled.h1`
  color: #fff;
  text-transform: uppercase;
  font-size: ${({ fontSize }) => fontSize};
`;
export const StyledSubHeading = styled(StyledHeading)`
  color: #111111;
  font-size: ${({ fontSize }) => fontSize};
`;
export const StyledParagraph = styled.p`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
`;
export const StyledHorizontalLine = styled.div`
  height: 3px;
  background-color: #707070;
`;
export const StyledPrice = styled.div`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ bgColor }) => bgColor};
  padding: 0.2rem 0.8rem;
`;
export const StyledImgFrame = styled.div`
  border: 1px solid #d0cece;
  border-radius: 0.6rem;
  width: 269px;
  height: 269px;
`;
export const StyledTrendingCard = styled.div`
  width: 269px;
  height: 312px;
`;

export const StyledButton = styled.button`
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  border: none;
`;
export const StyledButton2 = styled.button`
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  border: 1px solid #999999;
  font-weight: 700;
`;

export const StyledAnchor = styled.a`
  color: ${({ color }) => color};
  text-decoration: none;
  padding: 0.5rem 1.5rem;
`;
