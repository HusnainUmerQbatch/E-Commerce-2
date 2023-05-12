import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/login/Login";
import PrivateRoute from "../components/protectedRoute/Privateroute";
import Shop from "../pages/shop/Shop";
import SignUp from "../pages/auth/signUp";
import Products from "../pages/products";
import CreateProduct from "../pages/products/createProduct/CreateProduct";
import UpdateProduct from "../pages/products/updateProduct";
import Cart from "../pages/cart/Cart";
import NotFound from "../pages/notFound/NotFound";
import Checkout from "../pages/checkout";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
      
      <Route element={<PrivateRoute />}>
      <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/products/new" element={<CreateProduct />} />
        <Route exact path="/products/:id" element={<UpdateProduct />} />
        <Route exact path="/cart" element={<Cart />} />
        </Route>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
