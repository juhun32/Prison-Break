// src/Rotateboard.js
import React, { useState, useEffect } from "react";
import "./Rotateboard.css"; // Import your CSS file

const Rotateboard = () => {
  const quoteItems = [
    "The U.S. has the highest incarceration rate in the world, with every state surpassing the rates of nearly all independent democracies.",
    "This pattern shows that the U.S. relies excessively on incarceration as a response to crime, a practice not driven by actual crime rates, but by public perceptions of violence.",
    "incarceration has become the nation’s default response to crime, with, for example, 70 percent of convictions resulting in confinement — far more than other developed nations with comparable crime rates.",
    "More than $80 billion is spent annually on prisons in the United States.",
    "Total Incarceration: Over 1 million people incarcerated in the U.S. by the end of 2021.",
    "Many taxpayers are unaware of how much of their money funds the prison system, often more than education. Around $80 billion is spent on prisons annually, a figure that could double high school teacher salaries or eliminate public college tuition.",
    "Growth in justice system expenditures, 1982-2012 (adjusted for inflation): 310% +",
    "Average earnings someone loses over their lifetime by being incarcerated: $500,000 +"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quoteItems.length);
    }, 10000); // Change item every 3 seconds

    return () => clearInterval(interval);
  }, [quoteItems.length]);

  return (
    <div className="menu-board-container">
      <div className="menu-item">{quoteItems[currentIndex]}</div>
    </div>
  );
};

export default Rotateboard;
