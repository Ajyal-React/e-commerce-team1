import React, { useEffect } from "react";
import {
  Container,
  FlexBoxCol,
  StyledHeading,
  StyledButton,
  StyledParagraph,
} from "../../../Global.Style";
import "./Hero.css";
import { FaAngleDoubleRight, FaAngleDown } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { HeroAct } from "../../../Redux/products/actions/HeroAct";
import Loader from "../../../GlobalUtil/Loader";

function Hero() {
  const data = useSelector((store) => store.Hero);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(HeroAct());
  }, []);
  return (
    <div className="wrapper">
      <div className="black-paper"></div>
      <Container>
        <article>
          <FlexBoxCol>
            <StyledHeading fontSize="2.2rem">
              {data.loading ? <Loader /> : data.data.map((el) => el.name)}
            </StyledHeading>
            <StyledParagraph color="#fff" fontSize="1rem">
              {data.loading ? (
                <Loader />
              ) : (
                data.data.map((el) => el.description)
              )}
            </StyledParagraph>
            <StyledButton bgColor="#FFFFFF" borderRadius=".5rem" color="#000">
              Start Shopping <FaAngleDoubleRight />
            </StyledButton>
          </FlexBoxCol>
        </article>
      </Container>
      <div className="down-arrow">
        <FaAngleDown />
      </div>
    </div>
  );
}

export default Hero;
