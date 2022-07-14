import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
import React from "react";
import RightSection from "../Login/RightSection";
// import Footer from '../Footer/Footer'
import {Text, GreyText, Return, P, MethodCont, FormSec, PaymentWay, Summary, Row, Radio, Images, Img, Inputs, Input, Cvv, Date, Line, GreenP, SummaryP, SP, Buttons, ButtonOr, ButtonGr, Border, BorderSum} from './Payment.Style'
const PaymentPage = () => {
  return (
    <div>
      <Text>
        <Return>
          <FaArrowLeft /> Return to my cart
        </Return>
        <P>Choose your payment method</P>
      </Text>
      <MethodCont>
        <FormSec>
          <PaymentWay>
            <Row>
              <Radio>
                <input type="radio" /> Credit Card
              </Radio>
              <Images>
                <Img src="/Images/visa.jpg" />
                <Img src="/Images/card.jpg" />
                <Img src="/Images/Pay.jpg" />
              </Images>
            </Row>
            <Row>
              <Radio>
                <input type="radio" /> PayPal
              </Radio>
              <Images>
                <Img src="/Images/Pay.jpg" />
              </Images>
            </Row>
            <P>Credit Card number</P>
            <Input placeholder="6655 8844 2233 5599" />
            <Inputs>
              <Cvv>
                <P>CVV Code</P>
                <Input placeholder="6655 BB44 2233 5599" />
              </Cvv>
              <Date>
                <P>Expiry Date</P>
                <Input placeholder="MM/YY" />
              </Date>
            </Inputs>
            <P>Name On Card</P>
            <Input placeholder="6655 BB44 2233 5599" />
          </PaymentWay>
        </FormSec>
        <Summary>
          <SP>summary</SP>
          <Line>
            <GreyText>Order total</GreyText> <SummaryP>$ 2.378.00</SummaryP>
          </Line>
          <Line>
            <GreyText>Promo code</GreyText> <SummaryP>SALE22</SummaryP>
          </Line>
          <Line>
            <GreyText>Shipping</GreyText> <SummaryP>$219.00</SummaryP>
          </Line>
          <BorderSum />
          <Line>
            <SP>Subtotal</SP> <GreenP>Total: $1234</GreenP>
          </Line>
        </Summary>
      </MethodCont>
      <Border />
      <Buttons>
        <ButtonGr>Go Back</ButtonGr>
        <ButtonOr>Checkout</ButtonOr>
      </Buttons>
    </div>
  );
};

export default PaymentPage;
