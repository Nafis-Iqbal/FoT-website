import './Hero.css';

import React, { useState, useEffect, useRef } from 'react';

const heroSectionImage = new Image();
heroSectionImage.src = '/Images/GameArts/Wizard Boss Fight.webp';

const HeroSection = () => {
    const [backgroundImgDim, setBackgroundImgDim] = useState({ width: null, height: null });

    useEffect(() => {
        const heroImg = new Image();
        heroImg.src = '/Images/GameArts/Wizard Boss Fight.webp';

        // When the image is loaded, set the dimensions to the state
        heroImg.onload = () => {
            setBackgroundImgDim({
                width: heroImg.naturalWidth,
                height: heroImg.naturalHeight,
            });
        };

        heroImg.onerror = () => {
            console.error('Error loading the image');
        };
    }, []);

    const { width: bgImgWidth, height: bgImgHeight } = backgroundImgDim;

    const heroSectionStyle = bgImgWidth && bgImgHeight ? {
        backgroundImage: 'url("/Images/GameArts/Wizard Boss Fight.webp")',
        paddingTop: `${(bgImgHeight / bgImgWidth) * 100}%`
    } : {};

    if (bgImgWidth && bgImgHeight) {
        return (
            <div>
                <section className="hero-section" style={heroSectionStyle}></section >
            </div>
        );
    }
    else {
        return (
            <section className="hero-section">
                <h1>Loading...</h1>
            </section>
        );
    }
}

export default HeroSection;
