import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiFillHeart, AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import {
  StyledSubHeading,
  StyledParagraph,
  StyledPrice,
  StyledHorizontalLine,
} from "../../Global.Style";
import {
  CategoriesContainer,
  CategoriesCard,
  FlexBoxWrap,
  FlexBoxCategories,
  ImgDiv,
  Image,
  HeartIcon,
} from "./LaptopsPage.Style";

const LaptopsPage = () => {
  const [laptops, setLaptops] = useState([]);
  useEffect(() => {
    const API_URl =
      "https://omar-tech-store.herokuapp.com/api/products/category/LAPTOPS";

    axios.get(API_URl).then((response) => {
      setLaptops([...response.data.products]);
    });
  });

  const handleClick = (event) => {
    !event.isClicked ? (event.isClicked = true) : (event.isClicked = false);
    // setData([...data]);
  };
  return (
    <CategoriesContainer>
      <StyledSubHeading fontSize="26px">FEATURED CATEGORIES</StyledSubHeading>

      <FlexBoxWrap>
        {laptops.map((element) => {
          return (
            <CategoriesCard>
              <ImgDiv>
                <Image src={element.images[0]} />
              </ImgDiv>
              <FlexBoxCategories>
                <StyledParagraph>{element.brand}</StyledParagraph>
                <StyledPrice
                  color="#0EA965"
                  bgColor="#FFFFFF"
                  borderRadius="5px"
                >
                  {element.price}
                </StyledPrice>
              </FlexBoxCategories>
              <StyledHorizontalLine></StyledHorizontalLine>
              <FlexBoxCategories>
                <div>
                  <AiFillStar color="#F6AB27" size="18px" />
                  <AiFillStar color="#F6AB27" size="18px" />
                  <AiFillStar color="#F6AB27" size="18px" />
                  <AiFillStar color="#F6AB27" size="18px" />
                  <AiFillStar color="#F6AB27" size="18px" />
                  <StyledParagraph fontSize="12px" color="#AFAFAF">
                    (5)
                  </StyledParagraph>
                </div>
                <AiOutlineShoppingCart color="#AFAFAF" />
              </FlexBoxCategories>
              <HeartIcon>
                <AiFillHeart
                  size="20px"
                  color={`${element.isClicked ? "red" : "#AFAFAF"}`}
                  onClick={() => handleClick(element)}
                />
              </HeartIcon>
            </CategoriesCard>
          );
        })}
      </FlexBoxWrap>
    </CategoriesContainer>
  );
};

export default LaptopsPage;
