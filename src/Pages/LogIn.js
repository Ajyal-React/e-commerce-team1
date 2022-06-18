import React from "react";
import {FlexBox} from "../Global.Style";
import RightSection from "../Components/Login/RightSection" ;

import LeftSection from "../Components/SignPage/LeftSection";


function LOGIN() {
  return (
    <FlexBox>
      <LeftSection heading ="Welcome Back!"  discretion = "Login to your account and start your shopping NOW!"
/>

      <RightSection />
    </FlexBox>
  )
}

export default LOGIN;