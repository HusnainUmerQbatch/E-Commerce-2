import { Navigate, Outlet } from "react-router-dom";
import Dashboard from "../../pages/dashBoard";
import {useSelector} from "react-redux"
const PrivateRoutes = () => {
  const token = useSelector((state) => state.login.token);
  return token ? <Dashboard><Outlet /></Dashboard> : <Navigate to="/" />;
};

export default PrivateRoutes;
