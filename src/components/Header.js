import React from 'react';
import "./Header.css";
import cloudImage from "../assets/Cloud.png";
import arrowImage from "../assets/Arrow.png";

const Header = ({ activeSection }) => {
  const sectionTitles = {
    "About Me": "Welcome to Nicole's World!",
    "Experience": "Nicole's Journey",
    "Education": "Nicole's Learning Path",
    "Skills": "Nicole's Toolbox"
  };

  return (
    <div className="header-container">
      <div className="cloud-box">
        <img src={cloudImage} alt="Cloud" className="header-image" />
        <h1>{sectionTitles[activeSection] || "Nicole's Resume"}</h1>
      </div>
      <div className="arrow-instruction">
        <img src={arrowImage} alt="Arrow keys" className="arrow-image" />
        <span>Use the arrows to navigate!</span>
      </div>
    </div>
  );
};

export default Header;
