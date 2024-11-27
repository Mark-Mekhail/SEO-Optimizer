import React from "react";

export default function AboutCard(index, title, icon, content) {
  return (
    <div key={index} className="about-card">
      <div className="about-card-heading">
        <h3>{title}</h3>
        <img src={icon} className="icon"/>
      </div>
      <p>{content}</p>
    </div>
  );
};
