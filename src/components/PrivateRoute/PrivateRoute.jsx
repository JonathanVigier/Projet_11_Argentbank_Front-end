import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();

  const authUser =
    sessionStorage.getItem("user_tkn") ?? localStorage.getItem("tkn");

  useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  });

  return children;
};

export default PrivateRoute;
