import React from "react";
import RightSection from "../Components/Login/RightSection";
import LeftSection from "../Components/SignPage/LeftSection";
import { FlexBoxSign } from "../Components/SignPage/SignPage.Style";

function LOGIN() {
  return (
    <FlexBoxSign>
      <LeftSection
        heading="Welcome Back!"
        discretion="Login to your account and start your shopping NOW!"
      />

      <RightSection />
    </FlexBoxSign>
  );
}

export default LOGIN;
