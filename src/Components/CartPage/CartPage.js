import React from "react";
import { Container, FlexBox } from "../../Global.Style";
import "./Cart.css";
import { FaTimes, FaArrowLeft } from "react-icons/fa";
function CartPages() {
  return (
    <div>
      <Container className="CartContainer">
        <a className="retrn">
          <FaArrowLeft size="12" /> Return to the product details{" "}
        </a>

        <FlexBox className="basicCart">
          <FlexBox>
            <img
              src="/Images/bag.png"
              className="basicCart_img same"
              alt="logo"
            />
            <p className="basicCart_name same">Laptop Bag</p>
            <FlexBox className="basicCart_count same">
              <div className="count-min"> - </div>
              <div className="inp-count">
                {" "}
                <input value={0} />
              </div>
              <div className="count-plus"> + </div>
            </FlexBox>
          </FlexBox>
          <FlexBox>
            <div className="basicCart_price same">75$</div>
            <div className="basicCart_delete same">
              <FaTimes />
            </div>
          </FlexBox>
        </FlexBox>

        <FlexBox className="basicCart">
          <FlexBox>
            <img
              src="/Images/bag.png"
              className="basicCart_img same"
              alt="logo"
            />
            <p className="basicCart_name same">Laptop Bag</p>
            <FlexBox className="basicCart_count same">
              <div className="count-min"> - </div>
              <div className="inp-count">
                {" "}
                <input value={0} />
              </div>
              <div className="count-plus"> + </div>
            </FlexBox>
          </FlexBox>
          <FlexBox>
            <div className="basicCart_price same">75$</div>
            <div className="basicCart_delete same">
              <FaTimes />
            </div>
          </FlexBox>
        </FlexBox>

        <FlexBox className="basicCart">
          <FlexBox>
            <img
              src="/Images/bag.png"
              className="basicCart_img same"
              alt="logo"
            />
            <p className="basicCart_name same">Laptop Bag</p>
            <FlexBox className="basicCart_count same">
              <div className="count-min"> - </div>
              <div className="inp-count">
                {" "}
                <input value={0} />
              </div>
              <div className="count-plus"> + </div>
            </FlexBox>
          </FlexBox>
          <FlexBox>
            <div className="basicCart_price same">75$</div>
            <div className="basicCart_delete same">
              <FaTimes />
            </div>
          </FlexBox>
        </FlexBox>
        <button className="gopayment">Go To Payment</button>
      </Container>
    </div>
  );
}

export default CartPages;
