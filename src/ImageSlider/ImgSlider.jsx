// src/ImageSlider.js
import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

const images = [
  `${process.env.PUBLIC_URL}/image 1.jpg`,
  `${process.env.PUBLIC_URL}/image 2.jpg`,
  `${process.env.PUBLIC_URL}/image 3.jpg`,
  `${process.env.PUBLIC_URL}/image 4.jpg`,
  `${process.env.PUBLIC_URL}/image 5.jpg`,
  `${process.env.PUBLIC_URL}/image 6.jpg`,
  `${process.env.PUBLIC_URL}/image 7.jpg`,
  `${process.env.PUBLIC_URL}/image 8.jpg`,
  `${process.env.PUBLIC_URL}/image 9.jpg`,
  `${process.env.PUBLIC_URL}/image 10.jpg`,
  `${process.env.PUBLIC_URL}/image 11.jpg`,
  `${process.env.PUBLIC_URL}/image 12.jpg`,
  `${process.env.PUBLIC_URL}/image 13.jpg`,
  `${process.env.PUBLIC_URL}/image 14.jpg`,
  `${process.env.PUBLIC_URL}/image 15.jpg`,
  `${process.env.PUBLIC_URL}/image 16.jpg`,
  `${process.env.PUBLIC_URL}/image 17.jpg`,
  `${process.env.PUBLIC_URL}/image 18.jpg`,
  `${process.env.PUBLIC_URL}/image 19.jpg`,
  `${process.env.PUBLIC_URL}/image 20.jpg`,
  `${process.env.PUBLIC_URL}/image 21.jpg`,
  `${process.env.PUBLIC_URL}/image 22.jpg`,
  `${process.env.PUBLIC_URL}/image 23.jpg`,
  `${process.env.PUBLIC_URL}/image 24.jpg`,
  `${process.env.PUBLIC_URL}/image 25.jpg`,
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-wrapper">
      <div className="slider-container">
        <img src={images[currentIndex]} alt="slider" className="slider-image" />
        <button className="slider-button left" onClick={goToPrevious}>
          &#10094; {/* Left arrow symbol */}
        </button>
        <button className="slider-button right" onClick={goToNext}>
          &#10095; {/* Right arrow symbol */}
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
