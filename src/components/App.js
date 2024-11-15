import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Section from "./Section";
import Character from "./Character";

const App = () => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  const sections = ["About Me", "Experience", "Education", "Skills"];

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" && activeSectionIndex < sections.length - 1) {
      setActiveSectionIndex(activeSectionIndex + 1);
    } else if (e.key === "ArrowUp" && activeSectionIndex > 0) {
      setActiveSectionIndex(activeSectionIndex - 1);
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeSectionIndex]);

  return (
    <div className="app">
      <Header />
      <div className="sections">
        {sections.map((title, index) => (
          <Section
            key={title}
            title={title}
            isActive={index === activeSectionIndex}
          />
        ))}
      </div>
      <Character activeSectionIndex={activeSectionIndex} />
    </div>
  );
};

export default App;
