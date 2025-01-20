import './ScreenshotBlock.css'

import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ScreenshotSliderBlock = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="image-slider-container my-4">
            <div className="d-flex flex-row justify-content-center align-items-center w-100">
                {/* Left Button */}
                <div className="text-left" style={{ width: '10%' }}>
                    <Button className='w-100' variant="primary" onClick={prevImage}>Previous</Button>
                </div>

                {/* Image */}
                <div style={{ width: '80%' }}>
                    <img className="screenshot-image"
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                    />
                    <div className="screenshot-desc">
                        {images[currentIndex].text}
                    </div>
                </div>

                {/* Right Button */}
                <div className="text-right" style={{ width: '10%' }}>
                    <Button className='w-100' variant="primary" onClick={nextImage}>Next</Button>
                </div>
            </div>
        </div>
    );
};

export default ScreenshotSliderBlock;
