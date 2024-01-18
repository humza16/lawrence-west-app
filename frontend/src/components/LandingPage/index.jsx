import React from 'react'
import LandingNavbar from './navbar'
import CreateMomentSection from './CreateMomentSection'
import HeroSection from './HeroSection'
import CreateReelSection from './CreateReelSection'
import CreateCanvaSection from './CreateCanvaSection'
const LandingPage = () => {
    return (
        <div>
            {/* <LandingNavbar /> */}
            <HeroSection/>
            <CreateMomentSection />
            <CreateReelSection/>
            <CreateCanvaSection/>
        </div>
    )
}

export default LandingPage