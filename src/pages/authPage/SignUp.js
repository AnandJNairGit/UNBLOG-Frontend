 import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import TextInput from "../../common/components/TextInput";
import * as yup from "yup";


const SignUp = () => {
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
  return (
    <>
      <Formik {...formikProps}>
        {({ errors, isValid, touched }) => {
          console.log(touched);
          return (
            <Form>
              <TextInput
                name="name"
                label="name"
                type="name"
                error={errors.name}
                touched={touched.name}
              />

              <TextInput
                name="email"
                label="email"
                type="email"
                error={errors.email}
                touched={touched.email}
              />

              <TextInput
                name="password"
                label="password"
                type="password"
                error={errors.password}
                touched={touched.password}
              />
              <TextInput
                name="confirmPassword"
                label="confirm password"
                type="confirmPassword"
                error={errors.confirmPassword}
                touched={touched.confirmPassword}
              />

              <Button
                fullWidth
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
    </>
  );
};

export default SignUp;
