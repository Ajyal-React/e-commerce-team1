import React from "react";
import {FlexBox} from "../Global.Style";
import RightSection from '../Components/SignPage/RightSection'
import LeftSection from '../Components/SignPage/LeftSection'

function SignUp() {
  return (
    <FlexBox>
      <LeftSection heading= 'get started' discretion='Create a new account and start shopping NOW!'/>

      <RightSection />
    </FlexBox>
  )
}

export default SignUp;