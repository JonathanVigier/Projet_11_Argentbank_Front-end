import React from "react";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/SignInButton/SignInButton";

const NavigationBar = () => {
  return (
    <nav className="main-nav">
      <Logo />
      <Button />
    </nav>
  );
};

export default NavigationBar;
