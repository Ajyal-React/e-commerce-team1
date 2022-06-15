import React, { useState } from "react";
import {
  Container,
  StyledSubHeading,
  StyledParagraph
} from "../../../Global.Style";
import { FlexBoxWrap, TrendingSection } from "./Trending.style";
import TrendingProduct from "../Trending/TrendingProduct/TrendingProduct";

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

const Trending = () => {
  // const [data, setData] = useState([]);
  return (
    <TrendingSection>
      <Container>
        <StyledParagraph fontSize="12px">TOP PRODUCTS</StyledParagraph>
        <StyledSubHeading fontSize="26px">TRENDING THIS WEEK</StyledSubHeading>

        <FlexBoxWrap>
          {store.map((element) => {
            return (
              <TrendingProduct
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

export default Trending;
