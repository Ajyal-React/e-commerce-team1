import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  StyledSubHeading,
  StyledParagraph,
  StyledButton,
} from "../../../Global.Style";
import Product from "../Products/Product/Product";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";

import { feturedProduct } from "../../../Redux/products/actions/FuturdeProudct";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Products = () => {
  const featured = useSelector((store) => store.productReducer);
  console.log(featured);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(feturedProduct());
  }, []);

  return (
    <div className="products-sec">
      <Container>
        <div className="products-heading">
          <StyledParagraph fontSize="12px">DEVICES</StyledParagraph>
          <StyledSubHeading fontSize="26px">featured products</StyledSubHeading>
        </div>
      </Container>

      <Swiper
        className="slider slider-products"
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={4}
        navigation={{ clickable: true }}
        pagination={{ dynamicBullets: true }}
      >
        <div className="products-list">
          {featured?.data.map((element) => (
            <SwiperSlide>
              <Product
                imgUrl={element.images}
                title={element.name}
                price={element.price}
              />
            </SwiperSlide>
          ))}
                  console.log(featured);

        </div>
      </Swiper>

      <div className="bottom-sec">
        <StyledButton borderRadius=".4rem" bgColor="transparent">
          View More
        </StyledButton>
      </div>
    </div>
  );
};
export default Products;
