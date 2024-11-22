import React from "react";

const ExperienceCard = (index, role, company, description, logo) => {
  return (
    <div key={index} class="experience-card">
      <h4>{role}</h4>
      <h5 class="company-name">{company}</h5>
      <p>
        {description}
      </p>
      <img src={logo} class="experience-logo" />
    </div>
  );
};

export default ExperienceCard;
