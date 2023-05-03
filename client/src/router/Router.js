import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/login/Login";
import PrivateRoutes from "../components/protectedRoute/Privateroute"
import Dashboard from "../pages/dashBoard";

function Router() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard/>} />
        </Route>
        <Route path="/" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
