import React, { useState } from "react";
import { loginUser, rememberMe } from "../../redux/Slicers/authSlice";
import { Validation } from "../../utils/Validator/validator";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (input, value) => {
    if (input === "username") {
      setErrors(Validation(value));
      setEmail(value);
    } else if (input === "password") {
      setPassword(value);
    }
  };

  const handleValidation = (e) => {
    e.preventDefault();
    let userCredentials = {
      email,
      password,
    };
    dispatch(loginUser(userCredentials));
    navigate("/profile");
  };

  const handleRememberMe = () => {
    dispatch(rememberMe());
  };

  return (
    <form onSubmit={handleValidation}>
      <div className="input-wrapper" id="username-container">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="example@example.com"
          required
          onBlur={(e) => handleInput(e.target.name, e.target.value)}
        />
        {errors.username && <p className="error-text">{errors.username}</p>}
      </div>
      <div className="input-wrapper" id="password-container">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          onBlur={(e) => handleInput(e.target.name, e.target.value)}
          autoComplete="false"
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" onClick={handleRememberMe} />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button type="submit" className="sign-in-button">
        Sign In
      </button>
    </form>
  );
};

export default Form;
