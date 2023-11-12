import React from "react";
import { useNavigate } from "react-router-dom";
import useCountdown from "../../utils/Redirection/redirection";

const ErrorPage = () => {
  const navigate = useNavigate();

  const onZero = () => {
    navigate("/");
  };

  const number = useCountdown(5, onZero);

  return (
    <div className="body error-page">
      <div className="error-wrapper">
        <h1>Oops ! You seem to have lost your way...</h1>
        <h2>Let me get you back on track !</h2>
        <p>
          You will be redirect in <span className="error-number">{number}</span>{" "}
          seconds.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
