import React from "react";
import { Center, Container, FlexBox, MainContainer, StyledButton2 } from "../../../Global.Style";
import "./Categories.css";
import MultiCard from "./MultiCard";
import SpecCard from "./SpecCard";
import Tabs from "./Tabs";
function Categories() {
    return (
        <MainContainer>
            <div className="container-card">
                <Container>
                    <Tabs />
                    <FlexBox>
                        <div className="multi-card">
                            <MultiCard img={"phone1"} />
                            <MultiCard img={"phone3"} />
                            <MultiCard img={"phone4"}/>
                            <MultiCard img={"phone1"}/>
                        </div>
                        <div className="spec-card"><SpecCard /></div>
                    </FlexBox>
                    <Center>
                        <StyledButton2 borderRadius="3px" bgColor="white" className="btn">View More Laptops</StyledButton2>
                    </Center>
                </Container>
            </div>
        </MainContainer>
    );
}

export default Categories;
