import React from "react";
import {
	RightSectionSign,
	FlexBoxCol,
	Input,
	StyledButton,
	Center,
	StyledParagraph,
	FlexBox,
} from "../../Global.Style";
import "../SignPage/SignPage.Style";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import "./Login.css";
import { Formik } from "formik";
import * as yup from "yup";

function RightSection() {
	let schema = yup.object().shape({
		email: yup.string().email().required(),
		password: yup
			.string()
			.required()
			.min(
				8,
				"password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special"
			).matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
	});
	return (
		<IconContext.Provider value={{ className: "react-icons" }}>
			<RightSectionSign>
				<div className="form-sec">
					<Formik
						initialValues={{ email: "", password: "" }}
						validationSchema={schema}
						onSubmit={(values, { setSubmitting }) => {
							setTimeout(() => {
								alert(JSON.stringify(values, null, 2));
								setSubmitting(false);
							}, 400);
						}}
					>
						{({
							values,
							errors,
							touched,
							handleChange,
							handleBlur,
							handleSubmit,
						}) => (
							<form onSubmit={handleSubmit}>
								<h3>LOGIN</h3>

								<FlexBoxCol className="input-sec email-input">
									<label htmlFor="">&#9993; Email</label>
									<Input
										type="email"
										name="email"
										value={values.email}
										onBlur={handleBlur}
										onChange={handleChange}
										placeholder="John@example.com;"
									/>
									<p className="err">{errors.email && touched.email && errors.email}</p>
								</FlexBoxCol>
		

								<FlexBoxCol className="input-sec">
									<label htmlFor=""></label>
									<Input
										type="password"
										value={values.password}
										onBlur={handleBlur}
										onChange={handleChange}
										name="password"
										placeholder="  &#128274; Password"
									/>
									<p className="err2">
										{" "}
										{errors.password && touched.password && errors.password}
									</p>
									<button type="submit" className="butn_forget">
										FORGET?
									</button>
								</FlexBoxCol>

								<StyledButton color="#707070">
									<Center>
										LOGIN
										<FaLongArrowAltRight />
									</Center>
								</StyledButton>
							</form>
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
	);
}

export default RightSection;
