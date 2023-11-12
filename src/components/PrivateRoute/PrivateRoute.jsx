import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const authUser = sessionStorage ? sessionStorage.getItem("user_tkn") : token;

  useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  });

  return children;
};

export default PrivateRoute;
