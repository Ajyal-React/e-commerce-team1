import React, {useState, useEffect} from "react";
import axios from 'axios';
import {
  Container,
  StyledSubHeading,
  StyledParagraph
} from "../../../Global.Style";
import { FlexBoxWrap, TrendingSection } from "./Trending.style";
import TrendingProduct from "../Trending/TrendingProduct/TrendingProduct";


const Trending = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    const API_URl = 'https://omar-tech-store.herokuapp.com/api/products/trending-products';
    
   axios.get(API_URl)
  .then(response => {
    setTrending([...response.data])
  });
    
  }, []); 
  return (
    <TrendingSection>
      <Container>
        <StyledParagraph fontSize="12px">TOP PRODUCTS</StyledParagraph>
        <StyledSubHeading fontSize="26px">TRENDING THIS WEEK</StyledSubHeading>

        <FlexBoxWrap>
          {trending.map((element) => {
            return (
              <TrendingProduct
                imgUrl={element.images}
                title={element.name}
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
