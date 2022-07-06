import React from "react";
import { useField, ErrorMessage } from "formik";
import { InputWrapper, Input } from "./SignPage.Style";
const TextField = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <>
      <InputWrapper>
        <Input {...field} {...props} autoComplete="off" />
      </InputWrapper>
      <ErrorMessage name={field.name} />
    </>
  );
};
export default TextField;
