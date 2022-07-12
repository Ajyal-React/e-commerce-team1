import styled from 'styled-components'
import {FaArrowLeft} from 'react-icons/fa'
import React from 'react'
import RightSection from '../Login/RightSection'
// import Footer from '../Footer/Footer'
const Text = styled.p`
    margin-left: 8.5rem;
    @media (max-width: 768px) {
        margin: 0;
      }
`
const GreyText = styled.p`
    color: grey;
    font-size: .8rem;
    margin-bottom: .5rem;
`
const Return = styled(GreyText)`
    color: grey;
    font-size: .8rem;
    cursor: pointer;
    margin-bottom: 2rem;
`

const P = styled.p`
    font-size: .8rem;
    margin-bottom: .8rem;

`
const MethodCont = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;  
    }
`
const FormSec = styled.form`
    width: 50%;
    @media (max-width: 768px) {
        width: 100%;
        margin-left: .9rem;
      }
`
const PaymentWay = styled.div`
    margin-right: 2rem;
`
const Summary = styled.div`
    width: 30%;
    border: 1px solid grey;
    height: 12rem;
    padding: .6rem 2rem;
    @media (max-width: 768px) {
        width: 95%;
        margin: auto;
      }
`
const Row = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 1.5rem;
   margin-top: 1rem;
`
const Radio = styled.div`
`
const Images = styled.div`
    display: flex;
    justify-contnet: flex-start;
    width: 50%;

`
const Img = styled.img`
    height: 2.2rem;
    width: 3rem;
    object-fit: cover;
    margin: 0 .5rem;

`
const Inputs = styled.div`
    display: flex;
    justify-content: space-between;
    
`
const Input = styled.input`
    width: 100%;
    border: none;
    outline: none;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    padding: .7rem 1rem;
    margin: .7rem 0;
`
const Cvv = styled.div`
    width: 46%;
    
`
const Date = styled.div`
    width: 46%;
`
const Line = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: .8rem;
`
const GreenP = styled.p`
    font-size: 1rem;
    color: green;
    font-weight: bold;
    margin: 0;
    margin-bottom: .5rem;
`
const SummaryP = styled(P)`
    margin: 0;
    margin-bottom: .4rem;
`
const SP = styled(P)`
    font-size: 1rem;
    color: grey;
    font-weight: bold;
`
const Buttons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8.5rem;
    @media (max-width: 768px) {
        padding: 0;
        flex-direction: column;
      }
`
const ButtonOr = styled.button`
    padding: .5rem 1rem;
    border: none;
    outline: none;
    background: orange;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: .3rem
    }
`
const ButtonGr = styled(ButtonOr)`
    background: grey;
    @media (max-width: 768px) {
        display: none;
    }
`
const Border = styled.div`
    border: .5px solid grey;
    width: 80%;
    margin: 1rem auto;
    @media (max-width: 768px) {
        width: 100%;
      }
`
const BorderSum = styled(Border)`
    width: 100%;
    margin: 0;
`
const PaymentPage = () => {
  return (
    <div>
        <Text>
            <Return><FaArrowLeft /> Return to my cart</Return>
            <P>Choose your payment method</P>
        </Text>
        <MethodCont>
            <FormSec>
                <PaymentWay>
                    <Row>
                        <Radio>
                            <input type='radio' /> Credit Card
                        </Radio>
                        <Images>
                            <Img src='/Images/visa.jpg' />
                            <Img src='/Images/card.jpg' />
                            <Img src='/Images/Pay.jpg' />
                        </Images>
                    </Row>
                    <Row>
                        <Radio>
                            <input type='radio' /> PayPal
                        </Radio>
                        <Images>
                            <Img src='/Images/Pay.jpg' />
                        </Images>
                    </Row>
                    <P>Credit Card number</P>
                    <Input placeholder="6655 8844 2233 5599"/>
                    <Inputs>
                        <Cvv>
                            <P>CVV Code</P>
                            <Input placeholder="6655 BB44 2233 5599"/>
                        </Cvv>
                        <Date>
                            <P>Expiry Date</P>
                            <Input placeholder="MM/YY" />
                        </Date>
                    </Inputs>
                    <P>Name On Card</P>
                    <Input placeholder="6655 BB44 2233 5599"/>
                </PaymentWay>
                
            </FormSec>
            <Summary>
                <SP>summary</SP>
                <Line><GreyText>Order total</GreyText> <SummaryP>$ 2.378.00</SummaryP></Line>
                <Line><GreyText>Promo code</GreyText> <SummaryP>SALE22</SummaryP></Line>
                <Line><GreyText>Shipping</GreyText> <SummaryP>$219.00</SummaryP></Line>
                <BorderSum />
                <Line><SP>Subtotal</SP> <GreenP>Total: $1234</GreenP></Line>
            </Summary>
            
        </MethodCont>
        <Border />
        <Buttons>
            <ButtonGr>
                Go Back
            </ButtonGr>
            <ButtonOr>
                Checkout
            </ButtonOr>
        </Buttons>
    </div>
  )
}

export default PaymentPage
