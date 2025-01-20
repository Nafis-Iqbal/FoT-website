import './InfoBlock.css';
import React from 'react';

const InfoBlock = ({ order, imagePath, title, description }) => {
    let imageElement, textElement;

    imageElement = (
        <img
            className="info-ss-image me-3 ms-3"
            src={imagePath}
            alt={title}
        />
    )

    textElement = (
        <div className="info-text d-flex flex-column">
            <h4 className="text-start paragraph-spacing">{title}</h4>
            {description.map((desc, index) => (
                <p className="text-start paragraph-spacing" key={index}>{desc}</p>
            ))}
        </div>
    )

    if (order % 2 === 0) {
        return (
            <div className="info-block d-flex justify-content-between align-items-start w-100 my-4">
                {imageElement}
                {textElement}
            </div>
        );
    }
    else {
        return (
            <div className="info-block d-flex justify-content-between align-items-start w-100 my-4">
                {textElement}
                {imageElement}
            </div>
        );
    }
};

export default InfoBlock;
