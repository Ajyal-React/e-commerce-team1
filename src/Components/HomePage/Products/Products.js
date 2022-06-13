import React from "react";
import {
  Container,
  FlexBox,
  StyledSubHeading,
  StyledParagraph,
  StyledButton,
} from "../../../Global.Style";
import Product from "../Products/Product/Product";
import "./Products.css";
const store = [
  {
    image: "/Images/Base.png",
    productName: "Smart watch",
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
];

const Products = () => {
  return (
    <div className="products-sec">
      <Container>
        <div className="products-heading">
          <StyledParagraph fontSize="12px">DEVICES</StyledParagraph>
          <StyledSubHeading fontSize="26px">featured products</StyledSubHeading>
        </div>
        <div className="products-list">
          {store.map((element) => {
            return (
              <Product
                imgUrl={element.image}
                title={element.productName}
                price={element.price}
              />
            );
          })}
        </div>
        <div className="bottom-sec">
          <div className="dots">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <StyledButton borderRadius='.4rem' bgColor='transparent' >View More</StyledButton>
        </div>
      </Container>
    </div>
  );
};

export default Products;
