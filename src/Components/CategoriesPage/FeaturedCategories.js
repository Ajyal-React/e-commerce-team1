import React, { useState } from "react";
import {
  Container,
  StyledSubHeading,
  StyledParagraph,
  FlexBox,
  StyledPrice
} from "../../Global.Style";
import { FlexBoxWrap, TrendingSection } from "../HomePage/Trending/Trending.style";
// import TrendingProduct from "../Trending/TrendingProduct/TrendingProduct";
import MultiCard from "../HomePage/Categories/MultiCard"
import { AiFillHeart, AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
const store = [
  {
    image: "/Images/Base.png",
    productName: "Smart watch",
    price: "9000000$",
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
  // const [data, setData] = useState([]);
  const [likes, setLikes] = React.useState(100);
	const [isClicked, setIsClicked] = React.useState(false);
  
	const handleClick = () => {
	  if (isClicked) {
		setLikes(likes - 1);
	  } else {
		setLikes(likes + 1);
	  }
	  setIsClicked(!isClicked);
	};
  return (
    <TrendingSection>
      <Container>
        <StyledSubHeading fontSize="26px">FEATURED CATEGORIES</StyledSubHeading>

        <FlexBoxWrap>
          {store.map((element) => {
            return (
              <div className="card-phone">
              <div>
                <AiFillHeart  className={ `i-hert ${isClicked && 'liked'}` } onClick={ handleClick }  />
                <div className="cont-img-multi">
                <img src={element.image} className="img-multi" alt="logo" />
                </div>               
        
                <FlexBox>
                  <StyledSubHeading fontSize="12px">{element.productName}</StyledSubHeading>
                  <StyledPrice
                    color="#0EA965"
                    bgColor="white"
                    borderRadius="5px"
                    fontSize="8px"
                  >
                    $99
                  </StyledPrice>
                </FlexBox>
                <hr className="lines" />
                <FlexBox>
                  <p className="name-cust">
                    <AiFillStar className="ico-star" />
                    <AiFillStar className="ico-star" />
                    <AiFillStar className="ico-star" />
                    <AiFillStar className="ico-star" />
                    <AiFillStar className="ico-star" />
                  </p>
                  <p className="prev-price">
                    <AiOutlineShoppingCart  className="ico-shop" />
                  </p>
                </FlexBox>
              </div>
            </div>
              
            );
          })}
        </FlexBoxWrap>
      </Container>
    </TrendingSection>
  );
};

export default FeaturedCategories;
