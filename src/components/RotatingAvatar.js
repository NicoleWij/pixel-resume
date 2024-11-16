import React, { useState, useEffect } from "react";
import Avatar1 from "../assets/Avatar1.png";
import Avatar2 from "../assets/Avatar2.png";
import Avatar3 from "../assets/Avatar3.png";
import Avatar4 from "../assets/Avatar4.png";

const RotatingAvatar = () => {
  const [currentAvatar, setCurrentAvatar] = useState(Avatar1);

  const avatarImages = [Avatar1, Avatar2, Avatar3, Avatar4]; // Image rotation order
  let currentIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % avatarImages.length; // Loop through images
      setCurrentAvatar(avatarImages[currentIndex]);
    }, 500); // Change every 0.5 seconds (500ms)

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []); // Empty dependency array to run only once

  return (
    <div className="rotating-avatar">
      <img src={currentAvatar} alt="Rotating Avatar" className="avatar" />
    </div>
  );
};

export default RotatingAvatar;
