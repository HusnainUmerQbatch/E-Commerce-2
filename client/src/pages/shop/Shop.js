import React from "react";
import ProductCard from "../../components/productCard";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/navbar";
import { fetch_products } from "../../redux/slices/productSlice";
import Products from "../products";
const Shop = () => {
  const dispatch = useDispatch();
  const { products, success, pages } = useSelector((state) => state.product);
  const { token } = useSelector((state) => state.login);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  useEffect(() => {
    if (token) {
      console.log({ pages });
      dispatch(fetch_products({ token, page, limit }));
    }
  }, [success, page]);
  return (
    <div>
      {console.log(products)}
      <Navbar />
      <div className=" flex flex-wrap m-10 gap-4">
        {products.map((item, index) => {
          return (
            <div key={index}>
              <ProductCard
                name={item.name}
                id={(item._id)}
                description={item.description}
                price={item.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
