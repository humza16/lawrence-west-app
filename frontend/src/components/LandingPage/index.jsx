import React from 'react'

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
const LandingPage = () => {
    return (
        <>
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
        </>
    )
}

export default LandingPage