// import React from "react";

import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Field, Form, Formik } from "formik";
import { useEffect } from "react";
import * as yup from "yup";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const formikProps = {
  initialValues: initialValues,
  onSubmit: (values, formikHelpers) => {
    console.log("the values are:", values);
  },
  validationSchema: yup.object({
    name: yup.string().required("name is required"),
    email: yup.string().required("email is required"),
    password: yup
      .string()
      .required("password is required")
      .matches(
        /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/,
        "Please enter a strong password"
      ),
    confirmPassword: yup
      .string()
      .required("confirmPassword is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  }),
};

const AuthPage = () => {
  useEffect(() => {
    console.log("rendering");
  });

  return (
    <div className="auth">
      <Formik {...formikProps}>
        {({ errors, isValid, touched }) => {
          console.log(errors);
          return (
            <Form>
              <Field
                as={TextField}
                name="name"
                label="name"
                type="name"
                variant="outlined"
                color="primary"
              />
              <Box height={14} />

              <Field
                as={TextField}
                name="email"
                label="email"
                type="email"
                variant="outlined"
                color="primary"
              />
              <Box height={14} />

              <Field
                as={TextField}
                name="password"
                label="password"
                type="password"
                variant="outlined"
                color="primary"
              />
              <Box height={14} />

              <Field
                as={TextField}
                name="confirmPassword"
                label="confirm password"
                type="password"
                variant="outlined"
                color="primary"
              />
              <Box height={14} />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                Sign up
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AuthPage;
