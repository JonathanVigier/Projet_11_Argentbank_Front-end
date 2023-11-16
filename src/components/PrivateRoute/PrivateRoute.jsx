import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();

  const authUser = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  });

  return children;
};

export default PrivateRoute;
