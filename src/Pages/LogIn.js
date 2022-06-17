import React from "react";
import {FlexBox} from "../Global.Style";
import RightSection from '../Components/LOGIN/RightSection'
import LeftSection from '../Components/LOGIN/LeftSection'

function LOGIN() {
  return (
    <FlexBox>
      <LeftSection />

      <RightSection />
    </FlexBox>
  )
}

export default LOGIN;