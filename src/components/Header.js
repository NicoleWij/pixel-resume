import React from 'react';
import "./Header.css";
import cloudImage from "../assets/Cloud.png";

const Header = ({ activeSection }) => {
  const sectionTitles = {
    "About Me": "Welcome to Nicole's World!",
    "Experience": "Nicole's Journey",
    "Education": "Nicole's Learning Path",
    "Skills": "Nicole's Toolbox"
  };

  return (
    <div className="header-container">
      <img src={cloudImage} alt="Cloud" className="header-image" />
      <h1>{sectionTitles[activeSection] || "Nicole's Resume"}</h1>
    </div>
  );
};

export default Header;
