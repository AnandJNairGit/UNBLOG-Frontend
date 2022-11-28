// import React from "react";

import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Field, Form, Formik } from "formik";
import { useEffect } from "react";
import * as yup from "yup";

import logo from "../../assets/logo/UNBLOG.png";
import authPic from "../../assets/Authenticate/Secure.svg";
import TextInput from "../../common/components/TextInput";

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
    // <div className="bg-slate-900 h-screen w-screen flex justify-center items-center">
    <Box
      sx={{
        background: "#0f172a",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={2}
        padding={4}
        sx={{ maxWidth: "xl", justifyContent: "center", alignItems: "center" }}
      >
        <Grid item md={12} lg={6}>
          <Box>
            <img className="w-96" src={authPic}></img>
            <Typography variant="h2" marginTop={10} color="white">
              Let's Authenticate!
            </Typography>
          </Box>
        </Grid>
        <Grid item md={12} lg={6}>
          {/* AUTH SECTION */}
          <Box sx={{ maxWidth: "sm", minWidth: "600px", padding: 4 }}>
            <div className="neumorphic p-5">
              <img src={logo}></img>
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
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthPage;
