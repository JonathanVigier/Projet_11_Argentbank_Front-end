import React from "react";
import Logo from "../../components/Logo";
import Button from "../../components/SignInButton";

const NavigationBar = () => {
  return (
    <nav className="main-nav">
      <Logo />
      <Button />
    </nav>
  );
};

export default NavigationBar;
