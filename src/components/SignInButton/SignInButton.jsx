import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { resetToken } from "../../redux/Slicers/authSlice";
import { resetUser } from "../../redux/Slicers/userSlice";

const Button = () => {
  const dispatch = useDispatch();

  const isLogged = useSelector((state) => state.auth.token);
  const userName = useSelector((state) => state.user.user.firstName);

  const handleSignOut = () => {
    dispatch(resetToken());
    dispatch(resetUser());
  };

  return (
    <div>
      {!isLogged ? (
        <NavLink to="/login" className="main-nav-item">
          <i className="fa fa-user-circle"></i> Sign In
        </NavLink>
      ) : (
        <div>
          <NavLink to="/user" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {" " + userName}
          </NavLink>
          <NavLink to="/" className="main-nav-item" onClick={handleSignOut}>
            <i className="fa fa-sign-out"></i> Sign Out
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Button;
