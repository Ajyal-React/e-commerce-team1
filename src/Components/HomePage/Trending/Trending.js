import React, { useEffect } from "react";
import {
  Container,
  StyledSubHeading,
  StyledParagraph,
} from "../../../Global.Style";
import { FlexBoxWrap, TrendingSection } from "./Trending.style";
import TrendingProduct from "../Trending/TrendingProduct/TrendingProduct";

import { useSelector, useDispatch } from "react-redux";
import { TrendingAct } from "../../../Redux/products/actions/Trending-Act";
import Loader from "../../../GlobalUtil/Loader";
import { Link } from "react-router-dom";

const Trending = () => {
  const trending = useSelector((store) => store.Trending);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(TrendingAct());
  }, []);
  return (
    <TrendingSection>
      <Container>
        <StyledParagraph fontSize="12px">TOP PRODUCTS</StyledParagraph>
        <StyledSubHeading fontSize="26px">TRENDING THIS WEEK</StyledSubHeading>

        <FlexBoxWrap>
          {trending.loading ? (
            <Loader />
          ) : (
            trending.data.map((el, index) => (
              <Link to={`/details/${el._id}`}>
                <TrendingProduct
                  key={index}
                  imgUrl={el.images}
                  title={el.name}
                  price={el.price}
                  id={el._id}
                />
              </Link>
            ))
          )}
        </FlexBoxWrap>
      </Container>
    </TrendingSection>
  );
};

export default Trending;
