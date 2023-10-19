import React from "react";

const Loader = () => {
  return (
    <div className="loader-container">
      <p className="loader-text">Loading</p>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
