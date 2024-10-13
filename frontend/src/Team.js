// src/Team.js
import React from "react";
import "./Team.css"; // Your CSS file
import img1 from "./img/team1.png";
import img2 from "./img/team2.png";
import img3 from "./img/team3.png";
import img4 from "./img/team4.png";

const Team = () => {
  const images = [
    { src: img1, name: "Connor" },
    { src: img2, name: "Tabor" },
    { src: img3, name: "Satya" },
    { src: img4, name: "Juhun" },
  ];
  return (
    <div className="grid-container">
      {images.map((item, index) => (
        <div className="grid-item" key={index}>
          <div className="grid-box">
            <img src={item.src} alt={item.name} />
          </div>
          <p className="image-name">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Team;
