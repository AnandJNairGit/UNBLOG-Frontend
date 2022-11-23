// import React from "react";

import { Button } from "@mui/material";
import { Field, Form, Formik } from "formik";

const AuthPage = () => {
  return (
    <div className="auth">
      <Formik>
        {() => {
          return (
            <Form>
              <Field />
              <Field />
              <Field />
              <Field />
              <Button>Sign uo</Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AuthPage;
