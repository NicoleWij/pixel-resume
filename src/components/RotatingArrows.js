import React, { useState, useEffect } from 'react';
import Arrow from "../assets/Arrow.png"; // Main arrow image
import ArrowUp from "../assets/ArrowUp.png"; // Up arrow image
import ArrowDown from "../assets/ArrowDown.png"; // Down arrow image

const RotatingArrows = () => {
  const [currentArrow, setCurrentArrow] = useState(Arrow);

  const arrowImages = [Arrow, ArrowUp, ArrowDown]; // Image rotation order
  let currentIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % arrowImages.length; // Loop through images
      setCurrentArrow(arrowImages[currentIndex]);
    }, 500); // Change every 1 second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []); // Empty dependency array to run only once

  return (
    <div className="rotating-arrows">
      <img src={currentArrow} alt="Rotating Arrow" className="rotating-arrow-image" />
    </div>
  );
};

export default RotatingArrows;
