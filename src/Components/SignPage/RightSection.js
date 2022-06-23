import React from "react";
import {
	RightSectionSign,
	FlexBoxCol,
	Input,
	StyledButton,
	Center,
	StyledParagraph,
} from "../../Global.Style";
import { Link } from "react-router-dom";

import "./SignStyle.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Formik } from "formik";
import * as yup from "yup";
import axios from 'axios';

function RightSection() {
	let schema = yup.object().shape({
		email: yup.string().email().required(),
		password: yup
			.string()
			.required()
			.min(
				8,
				"password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special"
			)
			.matches(/[a-zA-Z]/, "Password can only contain Latin letters."),

		passwordConfirmation: yup
			.string().required("Confirm Password required")
			.oneOf([yup.ref("password"), null], "Passwords must match"),
	});
	const signreq = async(values) =>{ 	
		await axios.post('https://omar-tech-store.herokuapp.com/api/users/signup',  values );
		localStorage.setItem(values.data.token);
}
	return (
		<IconContext.Provider value={{ className: "react-icons" }}>
			<RightSectionSign>
				<div className="form-sec">
					<Formik
						initialValues={{ email: "", password: "", passwordConfirmation: "" }}
						validationSchema={schema}
						onSubmit={signreq}
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
								<h3>SIGN UP</h3>
								<FlexBoxCol className="input-sec email-input">
									<label htmlFor="">&#9993; Email</label>
									<Input
										type="email"
										name="email"
										value={values.email}
										onBlur={handleBlur}
										onChange={handleChange}
										placeholder="John@example.com"
									/>
									<p className="erors">{errors.email && touched.email && errors.email}</p>
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
									<p className="erors"> {errors.password && touched.password && errors.password}</p>
								</FlexBoxCol>
								<FlexBoxCol className="input-sec">
									<label htmlFor=""></label>
									<Input
										type="password"
										value={values.passwordConfirmation}
										onBlur={handleBlur}
										onChange={handleChange}
										name="passwordConfirmation"
										placeholder="  &#128274; Confirm Password"
									/>
									<p className="erors">
										{" "}
										{errors.passwordConfirmation &&
											touched.passwordConfirmation &&
											errors.passwordConfirmation}
									</p>
								</FlexBoxCol>
								<StyledButton color="#707070">
									<Center>
										SIGN UP
										<FaLongArrowAltRight />
									</Center>
								</StyledButton>
							</form>
						)}
					</Formik>
					<div>
						<Link to="/Login">
							<StyledParagraph color="#707070" fontSize="15px" margin="35px">
								Already member? <span>Sign in</span>
							</StyledParagraph>
						</Link>
					</div>
				</div>
			</RightSectionSign>
		</IconContext.Provider>
	);
}

export default RightSection;
