import React from "react";
import characterSprite from "../assets/character.png";

const Character = ({ activeSectionIndex }) => {
  return (
    <div
      className="character"
      style={{
        top: `calc(50% + ${activeSectionIndex * 170}px)`,
        backgroundImage: `url(${characterSprite})`,
      }}
    >
      <div className="sprite"></div>
    </div>
  );
};

export default Character;
