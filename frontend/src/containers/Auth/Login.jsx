import React from "react";
import { Grid } from "@mui/material";
import CarouselLayout from "components/Carousel";
import Login from "components/LoginForm";

const Signup = () => {
  return (
    <Grid container>
      <Grid md={6} display={{ xs: "none", md: "block" }}>
        <CarouselLayout />
      </Grid>
      <Grid item xs={12} md={6}>
        <Login />
      </Grid>
    </Grid>
  );
};

export default Signup;
