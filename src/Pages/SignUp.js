import React from "react";
import RightSection from "../Components/SignPage/RightSection";
import LeftSection from "../Components/SignPage/LeftSection";
import { FlexBoxSign } from "../Components/SignPage/SignPage.Style";
function SignUp() {
  return (
    <FlexBoxSign>
      <LeftSection
        heading="get started"
        discretion="Create a new account and start shopping NOW!"
      />

      <RightSection />
    </FlexBoxSign>
  );
}

export default SignUp;
