// import React from "react";

import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Field, Form, Formik } from "formik";

const AuthPage = () => {
  return (
    <div className="auth">
      <Formik>
        {() => {
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
