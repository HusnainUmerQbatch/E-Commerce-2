import { Navigate, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const PrivateRoute = () => {
  const notAdminRoutes = ["/shop", "/cart",'/checkout ' ,'thankyou'];
  const navigate = useNavigate();
  const location = useLocation();
  const { token, user } = useSelector((state) => state.login);
  useEffect(() => {
    if (!token || token === "") {
      navigate("/");
      return;
    } else if (token) {
      if (
        user.role === "seller" &&
        notAdminRoutes.includes(location.pathname)
      ) {
         navigate("/products");
      } else if (
        user.role === "customer" &&
        !notAdminRoutes.includes(location.pathname)
      ) {
        console.log("customer");
        navigate("/shop");
      } else {
         navigate(location.pathname);
      }
    }
  }, [token]);
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
