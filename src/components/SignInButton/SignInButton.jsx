import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { resetToken } from "../../redux/Slicers/authSlice";
import { resetUser } from "../../redux/Slicers/userSlice";
import toast from "react-hot-toast";

const Button = () => {
  const dispatch = useDispatch();

  const isUserLogged = useSelector((state) => state.auth.token);

  const userName = useSelector((state) => state.user.user.firstName);

  const handleSignOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    dispatch(resetToken());
    dispatch(resetUser());
    toast.success("Successfully logged out");
  };

  return (
    <div>
      {!isUserLogged ? (
        <NavLink to="/login" className="main-nav-item">
          <i className="fa fa-user-circle"></i> Sign In
        </NavLink>
      ) : (
        <div>
          <NavLink to="/profile" className="main-nav-item">
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
