import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink className="main-nav-logo" to="/">
      <img
        className="main-nav-logo-image"
        src="./assets/images/argentBankLogo.png"
        alt="Argent Bank Logo"
      />
    </NavLink>
  );
};

export default Logo;
