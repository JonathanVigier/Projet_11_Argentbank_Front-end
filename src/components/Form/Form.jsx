import React, { useState } from "react";
import { loginUser, rememberMe } from "../../redux/Slicers/authSlice";
import { Validation } from "../../utils/Validator/validator";
import { useDispatch, useSelector } from "react-redux";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isRemembered, setIsRemembered] = useState(false);

  const { loading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

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
    dispatch(loginUser(userCredentials)).then(() => {
      if (isRemembered) {
        dispatch(rememberMe());
      }
    });
  };

  const handleRememberMe = () => {
    setIsRemembered(!isRemembered);
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
          onChange={(e) => handleInput(e.target.name, e.target.value)}
          autoComplete="false"
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" onClick={handleRememberMe} />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button type="submit" className="sign-in-button">
        {loading ? "Sending..." : "Sign In"}
      </button>
    </form>
  );
};

export default Form;
