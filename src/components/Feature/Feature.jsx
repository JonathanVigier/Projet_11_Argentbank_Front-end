import React from "react";

const Feature = ({ imgSrc, title, description }) => {
  return (
    <div className="feature-item">
      <img
        src={`./assets/images/${imgSrc}`}
        alt="Chat Icon"
        className="feature-icon"
      />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Feature;
