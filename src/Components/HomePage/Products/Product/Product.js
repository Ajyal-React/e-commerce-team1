import React from "react";
import {
  StyledPrice,
  FlexBoxCol,
  StyledButton,
  StyledParagraph,
} from "../../../../Global.Style";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./Product.css";

const Product = (props) => {
  return (
    <div className="product">
      <FlexBoxCol>
        <div className="image">
          <img src={props.imgUrl} alt={props.title} />
        </div>
        <FlexBoxCol className="product-info">
          <StyledParagraph>{props.title}</StyledParagraph>
          <StyledPrice color="#FF4F04" borderRadius="2rem" bgColor="#FFF0E9">
            {props.price}
          </StyledPrice>
          <StyledButton
            borderRadius="2rem"
            bgColor="transparent"
            color="#8A8A8A"
          >
            More info <FaLongArrowAltRight />
          </StyledButton>
        </FlexBoxCol>
      </FlexBoxCol>
    </div>
  );
};

export default Product;
