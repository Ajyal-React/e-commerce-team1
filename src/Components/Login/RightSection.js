import React, { useState } from "react";
import {
  RightSectionSign,
  StyledButton,
  Center,
  StyledParagraph,
  FlexBox,
} from "../../Global.Style";
import { ConfirmPassDiv, ForgetBtn } from "../SignPage/SignPage.Style";
import "../SignPage/SignPage.Style";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import TextField from "../SignPage/TextField";
import "./Login.css";
import axios from "axios";
import { Formik, Form } from "formik";
import * as yup from "yup";

function RightSection() {
  const validate = yup.object({
    email: yup.string().email().required("Email is Required"),
    password: yup.string().required("Password is Required"),
  });
  const handleLoginUserData = (values) => {
    const USER_API = "https://omar-tech-store.herokuapp.com/api/users/login";

    axios
      .post(USER_API, { ...values })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log(res.data.token);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <RightSectionSign>
        <div className="form-sec">
          <Formik
            initialValues={{
              email: "omarAlhafni@gmail.com",
              password: "omarAlhafni@123456",
            }}
            validationSchema={validate}
            onSubmit={(values) => {
              handleLoginUserData(values);
            }}
          >
            {() => (
              <Form>
                <h3>LOGIN</h3>
                <TextField
                  placeholder="John@example.com"
                  name="email"
                  type="email"
                />
                <ConfirmPassDiv>
                  <TextField
                    placeholder="  &#128274; Password"
                    name="password"
                    type="password"
                  />
                  <ForgetBtn type="button" className="butn_forget">
                    FORGET?
                  </ForgetBtn>
                </ConfirmPassDiv>

                <StyledButton type="submit" color="#707070">
                  <Center>
                    LOGIN
                    <FaLongArrowAltRight />
                  </Center>
                </StyledButton>
              </Form>
            )}
          </Formik>

          <div>
            <Link to="/SignUp">
              <StyledParagraph color="#707070" fontSize="15px" margin="35px">
                Don't have account? <span>Sign up </span>
              </StyledParagraph>
            </Link>
          </div>
        </div>
      </RightSectionSign>
    </IconContext.Provider>
    // <IconContext.Provider value={{ className: "react-icons" }}>
    // 	<RightSectionSign>
    // 		<div className="form-sec">
    // 			<Formik
    // 				initialValues={{ email: "", password: "" }}
    // 				validationSchema={schema}
    // 				onSubmit={(values, { setSubmitting }) => {
    // 					setTimeout(() => {
    // 						alert(JSON.stringify(values, null, 2));
    // 						setSubmitting(false);
    // 					}, 400);
    // 				}}
    // 			>
    // 				{({
    // 					values,
    // 					errors,
    // 					touched,
    // 					handleChange,
    // 					handleBlur,
    // 					handleSubmit,
    // 				}) => (
    // 					<form onSubmit={handleSubmit}>
    // 						<h3>LOGIN</h3>
    // !!

    // 						<FlexBoxCol className="input-sec email-input">
    // 							<label htmlFor="">&#9993; Email</label>
    // 							<Input
    // 								type="email"
    // 								name="email"
    // 								value={values.email}
    // 								onBlur={handleBlur}
    // 								onChange={handleChange}
    // 								placeholder="John@example.com;"
    // 							/>
    // 							<p className="err">{errors.email && touched.email && errors.email}</p>
    // 						</FlexBoxCol>

    // 						<FlexBoxCol className="input-sec">
    // 							<label htmlFor=""></label>
    // 							<Input
    // 								type="password"
    // 								value={values.password}
    // 								onBlur={handleBlur}
    // 								onChange={handleChange}
    // 								name="password"
    // 								placeholder="  &#128274; Password"
    // 							/>
    // 							<p className="err2">
    // 								{" "}
    // 								{errors.password && touched.password && errors.password}
    // 							</p>
    // <button type="submit" className="butn_forget">
    // 	FORGET?
    // </button>
    // 						</FlexBoxCol>

    // <StyledButton color="#707070">
    // 	<Center>
    // 		LOGIN
    // 		<FaLongArrowAltRight />
    // 	</Center>
    // </StyledButton>
    // 					</form>
    // 				)}
    // 			</Formik>
    // 			<div>
    // 				<Link to="/SignUp">
    // 					<StyledParagraph color="#707070" fontSize="15px" margin="35px">
    // 						Don't have account? <span>Sign up </span>
    // 					</StyledParagraph>
    // 				</Link>
    // 			</div>
    // 		</div>
    // 	</RightSectionSign>
    // </IconContext.Provider>
  );
}

export default RightSection;
