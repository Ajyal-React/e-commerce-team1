import React, {useState} from "react";
import {
  Order,
  RightSection,
  LeftSection,
  Cross,
  OrderDetails,
  ImgDiv,
  ControlDiv,
  Quantity,
  InputNumber,
  Plus,
  Minus
} from "./Cart.style";
import { StyledParagraph } from "../../Global.Style";

function CartOrder() {
  const [quantity, setQuantity] = useState(1);
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleDecreaseQuantity = () => {
    setQuantity(quantity - 1);;
  };
  return (
    <Order>
      <LeftSection>
        <OrderDetails>
          <ImgDiv>
            <img src="/Images/people.svg" alt="" />
          </ImgDiv>
          <ControlDiv>
            <StyledParagraph>Laptop Bag</StyledParagraph>
            <Quantity>
              <Plus onClick={handleIncreaseQuantity}/>
              <InputNumber type={"number"} value={quantity}/>
              <Minus onClick={handleDecreaseQuantity}/>
            </Quantity>
          </ControlDiv>
        </OrderDetails>
      </LeftSection>
      <RightSection>
        <StyledParagraph color="#0EA965">75$</StyledParagraph>
        <Cross />
      </RightSection>
    </Order>
  );
}

export default CartOrder;
