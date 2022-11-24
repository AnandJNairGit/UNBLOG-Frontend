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
    email: yup.string().required("email is required").email(),
    password: yup
      .string()
      .required("password is required")
      .matches(
        /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/,
        "Please enter a strong password"
      ),
    confirmPassword: yup
      .string()
      .required()
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
          console.log(touched);
          return (
            <Form>
              <Field
                as={TextField}
                name="name"
                label="name"
                type="name"
                variant="outlined"
                color="primary"
                error={errors.name && touched.name}
                helperText={errors.name && touched.name ? errors.name : null}
              />
              <Box height={14} />

              <Field
                as={TextField}
                name="email"
                label="email"
                type="email"
                variant="outlined"
                color="primary"
                error={errors.email && touched.email}
                helperText={errors.email && touched.email ? errors.email : null}
              />
              <Box height={14} />

              <Field
                as={TextField}
                name="password"
                label="password"
                type="password"
                variant="outlined"
                color="primary"
                error={errors.password && touched.password}
                helperText={
                  errors.password && touched.password ? errors.password : null
                }
              />
              <Box height={14} />

              <Field
                as={TextField}
                name="confirmPassword"
                label="confirm password"
                type="password"
                variant="outlined"
                color="primary"
                error={errors.confirmPassword && touched.confirmPassword}
                helperText={
                  errors.confirmPassword && touched.confirmPassword
                    ? errors.confirmPassword
                    : null
                }
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
