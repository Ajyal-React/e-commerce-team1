import React, { useState } from "react";
import {
  Container,
  FlexBox,
  StyledSubHeading,
  StyledParagraph,
  StyledButton,
} from "../../../Global.Style";
import Product from "../Products/Product/Product";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
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
      </Container>
      {/* ............. */}
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation= {{ clickable: true}}
      pagination={{ clickable: true}}

      >
        <div className="products-list">
          {store.map((element) => {
            return (
              <SwiperSlide>
                <Product
                  imgUrl={element.image}
                  title={element.productName}
                  price={element.price}
                />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>

      {/* ............. */}
      <div className="bottom-sec">
        <StyledButton borderRadius=".4rem" bgColor="transparent">
          View More
        </StyledButton>
      </div>
    </div>
  );
};
export default Products;