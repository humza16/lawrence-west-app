import React from "react";
import { Grid } from "@mui/material";
import CarouselLayout from "components/Carousel";
import Login from "components/LoginForm";
import TestVideo from "components/TestVideo";
// import { MyComposition, EmotionRoot } from "components/TestVideo";

const Signup = () => {
  return (
    <Grid container>
      <Grid item md={6} display={{ xs: "none", md: "block" }}>
        <CarouselLayout />
      </Grid>
      <Grid item xs={12} md={6}>
        {/* <EmotionRoot /> */}
        {/* <Login /> */}
        <TestVideo />
      </Grid>
    </Grid>
  );
};

export default Signup;
