import {
	RightSectionSign,
	StyledButton,
	Center,
	StyledParagraph,
} from "../../Global.Style";
import { ConfirmPassDiv, ForgetBtn } from "../SignPage/SignPage.Style";
import "../SignPage/SignPage.Style";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import TextField from "../SignPage/TextField";
import "./Login.css";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { SignInAction } from "../../Redux/user/actions";

function RightSection() {
	const validate = yup.object({
		email: yup.string().email().required("Email is Required"),
		password: yup.string().required("Password is Required"),
	});
	const dispatch = useDispatch();
	const isSuccess = useSelector((state) => state.user.data);

	return (
		<IconContext.Provider value={{ className: "react-icons" }}>
			<RightSectionSign>
				<div className="form-sec">
					<Formik
						initialValues={{
							email: "mahmoud@hammad.com",
							password: "Mahmoud!123",
						}}
						validationSchema={validate}
						onSubmit={(values) => {
							dispatch(SignInAction(values));
						}}
					>
						{() => (
							<Form>
								<h3>LOGIN</h3>
								<TextField placeholder="John@example.com" name="email" type="email" />
								{isSuccess ? (
									<p style={{ color: "red" }}>{isSuccess.message.split(":")[1]}</p>
								) : null}
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
	);
}

export default RightSection;
