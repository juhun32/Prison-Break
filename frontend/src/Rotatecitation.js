// src/Rotatecitation.js
import React, { useState, useEffect } from "react";
import "./Rotatecitation.css"; // Import your CSS file

const Rotatecitation = () => {
  const quoteItems = [
    "prisonpolicy.org",
    "prisonpolicy.org",
    "prisonpolicy.org",
    "visualcapitalist.com",
    "usafacts.org",
    "medium.com",
    "prisonpolicy.org"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quoteItems.length);
    }, 10000); // Change item every 3 seconds

    return () => clearInterval(interval);
  }, [quoteItems.length]);

  return (
    <div className="citation-board-container">
      <div className="citation-item">Source: {quoteItems[currentIndex]}</div>
    </div>
  );
};

export default Rotatecitation;
