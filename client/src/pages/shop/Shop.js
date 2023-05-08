import React from "react";
import ProductCard from "../../components/productCard";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/navbar";
import { fetch_products } from "../../redux/slices/productSlice";
import loadinArrow from "../../assets/loadinArrow.svg";
const Shop = () => {
  const dispatch = useDispatch();
  const {  success,  } = useSelector((state) => state.product);
  const [hideMoreProducts, setHideMoreProducts] = useState(true);
  const [myProducts, setMyProducts] = useState([]);

  const { token } = useSelector((state) => state.login);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  useEffect(() => {
    if (token) {
      dispatch(fetch_products({ token, page, limit })).then((res) => {
        console.log("length=", res.payload.products.length);
        setMyProducts([...myProducts, ...res.payload.products]);
        if (res.payload.products.length < 10) {
          setHideMoreProducts(false);
        }
      });
    }
  }, [success, page]);
  return (
    <div>
      <Navbar />
      <div className=" flex flex-wrap m-10 gap-4">
        {myProducts?.map((item, index) => {
          return (
            <div key={index}>
              <ProductCard
                name={item.name}
                id={item._id}
                description={item.description}
                price={item.price}
              />
            </div>
          );
        })}
      </div>
      {hideMoreProducts && (
        <div
          className="flex justify-center cursor-pointer rounded-md mb-10 items-center bg-slate-300 h-10 mx-auto w-2/12"
          onClick={() => {
            // setLimit(limit + 10);
            setPage(page + 1);
          }}
        >
          <div className="h-5 w-5 mr-3">
            <img src={loadinArrow} />
          </div>
          More Products
        </div>
      )}
    </div>
  );
};

export default Shop;
