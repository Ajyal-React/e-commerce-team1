import React from "react";
import {
  StyledPrice,
  StyledButton,
  StyledParagraph,
} from "../../../../Global.Style";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <div className="product">
      <img src={props.imgUrl} alt={props.title} />
      <StyledParagraph>{props.title}</StyledParagraph>
      <StyledPrice color="#FF4F04" borderRadius="2rem" bgColor="#FFF0E9">
        {props.price}
      </StyledPrice>
      <StyledButton borderRadius="2rem" bgColor="transparent" color="#8A8A8A">
        <Link to={`/details/${props.id}`}>More info</Link>
        <FaLongArrowAltRight />
      </StyledButton>
    </div>
  );
};

export default Product;
