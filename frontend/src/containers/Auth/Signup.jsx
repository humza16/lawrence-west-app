import RegistrationForm from "components/RegistrationForm";
import React from "react";
import { Grid } from "@mui/material";
import CarouselLayout from "components/Carousel";

const Signup = () => {
  return (
    <Grid container>
      <Grid item xs={0} md={6} display={{ xs: "none", md: "block" }}>
        <CarouselLayout />
      </Grid>
      <Grid item xs={12} md={6}>
        <RegistrationForm />
      </Grid>
    </Grid>
  );
};

export default Signup;
