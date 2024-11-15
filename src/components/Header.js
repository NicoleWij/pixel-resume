import React from 'react';
import "./Header.css"; // Your CSS file

const Header = ({ activeSection }) => {
  const sectionTitles = {
    "About Me": "Welcome to Nicole's World!",
    "Experience": "Nicole's Journey",
    "Education": "Nicole's Learning Path",
    "Skills": "Nicole's Toolbox"
  };

  return (
    <div className="header-container">
      <h1>{sectionTitles[activeSection] || "Nicole's Resume"}</h1>
      <div className="progress-bar">Progress Bar Placeholder</div>
    </div>
  );
};

export default Header;
