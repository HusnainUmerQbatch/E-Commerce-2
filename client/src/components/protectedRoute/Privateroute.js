import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const PrivateRoute = () => {
  const navigate = useNavigate();
  const { token, user } = useSelector((state) => state.login);
  useEffect(() => {
    if (!token || token === "") {
      navigate("/");
      return;
    } else if (token) {
      if (user.role === "seller") {
        navigate("/products");
      } else {
        navigate("/shop");
      }
    }
  }, [token]);
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
