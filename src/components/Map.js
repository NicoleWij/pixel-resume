import React from "react";
import "./Map.css";
import Character from "./Character"; // Import the Character component

const Map = ({ activeSectionIndex, direction }) => {
  const sections = ["About Me!", "Experience", "Education", "Skills"];

  return (
    <div className="map">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`map-node ${index === activeSectionIndex ? "active" : ""}`}
        >
          {/* Render the Character component next to the active map node */}
          {index === activeSectionIndex && (
            <Character activeSectionIndex={activeSectionIndex} direction={direction} />
          )}
          <div className="map-circle"></div>
          <span className="map-label">{section}</span>
        </div>
      ))}
      <div className="map-line"></div>
    </div>
  );
};

export default Map;
