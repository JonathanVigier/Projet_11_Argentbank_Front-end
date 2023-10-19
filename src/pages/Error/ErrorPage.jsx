import React, { useEffect, useState } from "react";

const ErrorPage = () => {
  const [number, setNumber] = useState(5);

  const decreaseCounter = () => {
    if (number > 1) {
      setNumber(number - 1);
    } else {
      window.document.location.href = "http://localhost:3000/";
    }
  };

  useEffect(() => {
    setInterval(() => {
      decreaseCounter();
    }, 1000);
  }, [number]);

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
