import React from "react";
import characterSprite from "../assets/character.png";

const Character = ({ activeSectionIndex, direction }) => {
  return (
    <div className="character-container">
      {direction === "down" && (
        <div
          className="character down"
          style={{
            top: `calc(20% + ${activeSectionIndex * 180}px)`, // Dynamically position the character
            backgroundImage: `url(${characterSprite})`,
            backgroundPosition: "0px 0px", // First row
          }}
        ></div>
      )}
      {direction === "up" && (
        <div
          className="character up"
          style={{
            top: `calc(20% + ${activeSectionIndex * 180}px)`, // Dynamically position the character
            backgroundImage: `url(${characterSprite})`,
            backgroundPosition: "0px -144px", // Second row (adjust based on sprite sheet row size)
          }}
        ></div>
      )}
    </div>
  );
};

export default Character;
