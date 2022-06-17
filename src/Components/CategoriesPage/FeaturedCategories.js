import React, { useState } from "react";
import {
  Container,
  StyledSubHeading,
  StyledParagraph
} from "../../Global.Style";
import { FlexBoxWrap, TrendingSection } from "../HomePage/Trending/Trending.style";
// import TrendingProduct from "../Trending/TrendingProduct/TrendingProduct";
import MultiCard from "../HomePage/Categories/MultiCard"

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
  // const [data, setData] = useState([]);
  return (
    <TrendingSection>
      <Container>
        <StyledSubHeading fontSize="26px">FEATURED CATEGORIES</StyledSubHeading>

        <FlexBoxWrap>
          {store.map((element) => {
            return (
              <MultiCard
                imgUrl={element.image}
                title={element.productName}
                price={element.price}
              />
            );
          })}
        </FlexBoxWrap>
      </Container>
    </TrendingSection>
  );
};

export default FeaturedCategories;
