import React from 'react'
import Stack from '@mui/material/Stack'
import TotalReelsCreated from './TotalReelsCreated'
import QuoteCard from 'components/QuoteCard'
import PriceCardSection from './PriceCardSection'
import Footer from 'components/Footer'
import VideoEditorSection from './VideoEditorSection'
import LandingNavbar from './navbar'
import CreateMomentSection from './CreateMomentSection'
import HeroSection from './HeroSection'
import CreateReelSection from './CreateReelSection'
import CreateCanvaSection from './CreateCanvaSection'

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import theme from 'theme';

// Create a custom theme
const landingPageTheme = createTheme({
    ...theme,
    typography: {
        fontFamily: ["Bricolage Grotesque", "sans-serif"].join(","), // Choose the font-family here
    },
});


const LandingPage = () => {
    return (
        <ThemeProvider theme={landingPageTheme}>
            <LandingNavbar />
            <HeroSection />
            <CreateMomentSection />
            <CreateReelSection />
            <CreateCanvaSection />
            <TotalReelsCreated />
            <QuoteCard />
            <PriceCardSection />
            <VideoEditorSection />
            <Footer />
        </ThemeProvider>
    )
}

export default LandingPage