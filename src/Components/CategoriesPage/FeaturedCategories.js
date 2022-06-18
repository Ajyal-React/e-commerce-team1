import React, { useState } from "react";
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
} from "./FeaturedCategoriesStyle";

const store = [
  {
    image: "/Images/lap.png",
    productName: "Smart watch",
    price: "900$",
  },
  {
    image: "/Images/phone3.png",
    productName: "Games Arm",
    price: "900$",
  },
  {
    image: "/Images/mac-laptop.png",
    productName: "Mac Laptop",
    price: "900$",
  },
  {
    image: "/Images/bag.png",
    productName: "Back bag",
    price: "900$",
  },
  {
    image: "/Images/phone4.png",
    productName: "phone",
    price: "900$",
  },
  {
    image: "/Images/gamepad_controller.png",
    productName: "Games Arm",
    price: "900$",
  },
  {
    image: "/Images/mac-laptop.png",
    productName: "Mac Laptop",
    price: "900$",
  },
  {
    image: "/Images/bag.png",
    productName: "Back bag",
    price: "900$",
  },
  {
    image: "/Images/phone3.png",
    productName: "phone",
    price: "900$",
  },
  {
    image: "/Images/gamepad_controller.png",
    productName: "Games Arm",
    price: "900$",
  },
  {
    image: "/Images/mac-laptop.png",
    productName: "Mac Laptop",
    price: "900$",
  },
  {
    image: "/Images/bag.png",
    productName: "Back bag",
    price: "900$",
  },
  {
    image: "/Images/gamepad_controller.png",
    productName: "Games Arm",
    price: "900$",
  },
  {
    image: "/Images/bag.png",
    productName: "Back bag",
    price: "900$",
  },
  {
    image: "/Images/phone3.png",
    productName: "phone",
    price: "900$",
  },
];

const FeaturedCategories = () => {
  const [data, setData] = useState([...store]);

  const handleClick = (event) => {
    !event.isClicked ? (event.isClicked = true) : (event.isClicked = false);
    setData([...data]);
  };
  return (
    <CategoriesContainer>
      <StyledSubHeading fontSize="26px">FEATURED CATEGORIES</StyledSubHeading>

      <FlexBoxWrap>
        {data.map((element) => {
          return (
            <CategoriesCard>
              <ImgDiv>
                <Image src={element.image} />
              </ImgDiv>
              <FlexBoxCategories>
                <StyledParagraph>Dell Laptop</StyledParagraph>
                <StyledPrice
                  color="#0EA965"
                  bgColor="#FFFFFF"
                  borderRadius="5px"
                >
                  $99
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

export default FeaturedCategories;
