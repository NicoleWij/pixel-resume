import React from "react";
import characterSprite from '../assets/character.png'; // Adjust the path if needed

const Character = ({ activeSectionIndex }) => {
  return (
    <div
      className="character"
      style={{
        top: `calc(50% + ${activeSectionIndex * 100}px)`, // Adjust the vertical position
      }}
    >
      <div
        className="sprite"
        style={{
          backgroundImage: `url(${characterSprite})`, // Use the imported sprite
        }}
      ></div>
    </div>
  );
};

export default Character;