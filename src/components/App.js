import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Section from "./Section";
import Map from "./Map";

const App = () => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [direction, setDirection] = useState("down");

  const sections = ["About Me", "Experience", "Education", "Skills"];

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" && activeSectionIndex < sections.length - 1) {
      e.preventDefault(); // Prevent page scroll
      setDirection("down");
      setActiveSectionIndex((prevIndex) => prevIndex + 1);
    } else if (e.key === "ArrowUp" && activeSectionIndex > 0) {
      e.preventDefault(); // Prevent page scroll
      setDirection("up");
      setActiveSectionIndex((prevIndex) => prevIndex - 1);
    }
  };
  

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeSectionIndex]);

  return (
    <div className="app">
      <Header activeSection={sections[activeSectionIndex]} />
      <div className="main-content">
        <div className="sections">
          {sections.map((title, index) => (
            <Section
              key={title}
              title={title}
              isActive={index === activeSectionIndex}
            />
          ))}
        </div>
        <div className="map-container">
          <Map activeSectionIndex={activeSectionIndex} direction={direction} />
        </div>
      </div>
    </div>
  );
};

export default App;
