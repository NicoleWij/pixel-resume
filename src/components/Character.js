import React from "react";
import "./Character.css"; // Import the CSS file

const Character = ({ activeSectionIndex, direction }) => {
  return (
    <div
      className={`character ${direction}`}
    ></div>
  );
};

export default Character;
