import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/login/Login";
import PrivateRoutes from "../components/protectedRoute/Privateroute"
import Dashboard from "../pages/dashBoard";
import Shop from "../pages/shop/Shop";
import SignUp from "../pages/auth/signUp";
import Products from "../pages/products";
function Router() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
        <Route  path="/dashboard"  element={<Dashboard/>} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route  path="/shop"  element={<Shop/>} />
        <Route  path="/products"  element={<Products/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
