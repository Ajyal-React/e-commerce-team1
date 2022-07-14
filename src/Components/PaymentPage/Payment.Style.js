import styled from "styled-components";

export const Text = styled.p`
  margin-left: 8.5rem;
  @media (max-width: 768px) {
    margin: 0;
  }
`;
export const GreyText = styled.p`
  color: grey;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;
export const Return = styled(GreyText)`
  color: grey;
  font-size: 0.8rem;
  cursor: pointer;
  margin-bottom: 2rem;
`;

export const P = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0.8rem;
`;
export const MethodCont = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;
export const FormSec = styled.form`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0.9rem;
  }
`;
export const PaymentWay = styled.div`
  margin-right: 2rem;
`;
export const Summary = styled.div`
  width: 30%;
  border: 1px solid grey;
  height: 12rem;
  padding: 0.6rem 2rem;
  @media (max-width: 768px) {
    width: 95%;
    margin: auto;
  }
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  margin-top: 1rem;
`;
export const Radio = styled.div``;
export const Images = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50%;
`;
export const Img = styled.img`
  height: 2.2rem;
  width: 3rem;
  object-fit: cover;
  margin: 0 0.5rem;
`;
export const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  padding: 0.7rem 1rem;
  margin: 0.7rem 0;
`;
export const Cvv = styled.div`
  width: 46%;
`;
export const Date = styled.div`
  width: 46%;
`;
export const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8rem;
`;
export const GreenP = styled.p`
  font-size: 1rem;
  color: green;
  font-weight: bold;
  margin: 0;
  margin-bottom: 0.5rem;
`;
export const SummaryP = styled(P)`
  margin: 0;
  margin-bottom: 0.4rem;
`;
export const SP = styled(P)`
  font-size: 1rem;
  color: grey;
  font-weight: bold;
`;
export const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8.5rem;
  @media (max-width: 768px) {
    padding: 0;
    flex-direction: column;
  }
`;
export const ButtonOr = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  background: orange;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 0.3rem;
  }
`;
export const ButtonGr = styled(ButtonOr)`
  background: grey;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Border = styled.div`
  border: 0.5px solid grey;
  width: 80%;
  margin: 1rem auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const BorderSum = styled(Border)`
  width: 100%;
  margin: 0;
`;