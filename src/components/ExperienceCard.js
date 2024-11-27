import React from "react";

export default function ExperienceCard(index, role, company, description, logo) {
  return (
    <div key={index} className="experience-card">
      <div>
        <h4>{role}</h4>
        <h6 className="company-name">{company}</h6>
        <p>
          {description}
        </p>
      </div>
      <img src={logo} className="logo" />
    </div>
  );
};
