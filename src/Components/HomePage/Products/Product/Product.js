import React from "react";
import {StyledPrice, FlexBox, StyledButton, StyledParagraph } from "../../../../Global.Style";
import { FaLongArrowAltRight} from "react-icons/fa";
import "./Product.css";


const Product = (props) =>{
  return (
  
    <div className="product">
      <img src={props.imgUrl} alt={props.title} />
      <StyledParagraph >{props.title}</StyledParagraph>
      <StyledPrice color ='#FF4F04' borderRadius='2rem' bgColor='#FFF0E9'>{props.price}</StyledPrice>
      <StyledButton borderRadius='2rem' bgColor='transparent' color='#8A8A8A'>More info <FaLongArrowAltRight /></StyledButton>
    </div>
  );
}

export default Product;