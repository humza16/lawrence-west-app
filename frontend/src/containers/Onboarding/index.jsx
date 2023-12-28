import React from 'react';
import { Grid } from "@mui/material";
import CarouselLayout from "components/Carousel";
import OnboardingForm from 'components/OnboardingForm';
const Onboarding = () => {
    return (
        <Grid container>
            <Grid item xs={0} md={6} display={{ xs: "none", md: "block" }}>
                <CarouselLayout />
            </Grid>
            <Grid item xs={12} md={6}>
                <OnboardingForm />
            </Grid>
        </Grid>
    )
}

export default Onboarding