// import React from "react";

import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

import logo from "../../assets/logo/UNBLOG.png";
import authPic from "../../assets/Authenticate/Secure.svg";
import SignUp from "./SignUp";
import Login from "./Login";


const AuthPage = () => {
const [logIn, setLogIn] = useState(true);
   
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
          <Box>
            <div className="neumorphic p-10">
              <Box
                sx={{
                  maxWidth: "500px",
                  minWidth: "sm",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <img width="150px" src={logo}></img>
                {logIn?<Login />: <SignUp />}
                
              </Box>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthPage;
