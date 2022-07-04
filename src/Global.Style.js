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
  justify-content: space-evenly;
  align-items: flex-start;
  position: relative;
`;
export const ColCenter = styled(FlexBox)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const FlexBoxColCE = styled(FlexBox)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  margin: ${({ margin }) => margin};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};;
  display: inline-block;
`;
export const StyledHorizontalLine = styled.div`
  height: 1px;
  background-color: #afafaf;
  width: 80%;
  margin: 1rem auto;
  opacity: 0.5;
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
  margin: 0.5rem;
`;

export const StyledButton = styled.button`
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ bgColor }) => bgColor ? bgColor : "transparent"};
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
export const LeftSectionSign = styled.div`
  width: 36%;
  height: 100vh;
  background-image: linear-gradient(
    to bottom,
    #fa7400,
    #d96500,
    #b95600,
    #9a4800,
    #7d3a00
  );
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
export const RightSectionSign = styled(Center)`
  width: 64%;
  height: 100vh;
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: end;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 2rem 0;
  }
`;
export const FlexBoxColSpaceBetween = styled(FlexBoxCol)`
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 80%;
  margin: auto;
`;
export const Input = styled.input`
  width: 100%;
  height: 3rem;
  font-size: 14px;
  padding: 5px;
  border: none;
  border-radius: 3px;
  outline: none;

  ::placeholder {
    color: #b9b9b9;
  }
`;
