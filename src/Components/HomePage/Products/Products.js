import React, {useState, useEffect} from "react";
import axios from 'axios';
import {
  Container,
  StyledSubHeading,
  StyledParagraph,
  StyledButton,
} from "../../../Global.Style";
import Product from "../Products/Product/Product";
import "./Products.css";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const API_URl = 'https://omar-tech-store.herokuapp.com/api/products/featured-products';
    
   axios.get(API_URl)
  .then(response => {
    setProducts([...response.data])
  });
    
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
          {products.map((element) => {
            return (
              <SwiperSlide>
                <Product
                  imgUrl={element.images}
                  title={element.name}
                  price={element.price}
                />
              </SwiperSlide>
            );
          })}
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
