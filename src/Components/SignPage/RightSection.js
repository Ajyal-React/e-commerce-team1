import {
  RightSectionSign,
  StyledButton,
  Center,
  StyledParagraph,
} from "../../Global.Style";

import { Link } from "react-router-dom";
import TextField from "./TextField";
import "./SignStyle.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { SignUpAction } from "../../Redux/user/actions";
function RightSection() {
  const validate = yup.object({
    email: yup.string().email().required("Email is Required"),
    password: yup
      .string()
      .matches(
        "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$",
        " at least 8 character,  must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number Can contain special characters"
      )
      .required("Password is Required"),
    passwordConfirmation: yup
      .string()
      .required("Confirm Password required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const dispatch = useDispatch();
  const isSuccess = useSelector((state) => state.user.data);
  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <RightSectionSign>
        <div className="form-sec">
          <Formik
            initialValues={{
              email: "",
              password: "",
              passwordConfirmation: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => {
              dispatch(SignUpAction(values));
            }}
          >
            {() => (
              <Form>
                <h3>SIGN UP</h3>
                <TextField
                  placeholder="John@example.com"
                  name="email"
                  type="email"
                />
                {isSuccess ? (
                  <p style={{ color: "red" }}>
                    {isSuccess.message.split(":")[1]}
                  </p>
                ) : null}
                <TextField
                  placeholder="  &#128274; Password"
                  name="password"
                  type="password"
                />
                <TextField
                  placeholder="  &#128274; Confirm Password"
                  name="passwordConfirmation"
                  type="password"
                />
                <StyledButton type="submit" color="#707070">
                  <Center>
                    SIGN UP
                    <FaLongArrowAltRight />
                  </Center>
                </StyledButton>
              </Form>
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
