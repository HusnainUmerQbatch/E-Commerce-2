import React from "react";
import ProductCard from "../../components/productCard";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/navbar";
import { fetch_products } from "../../redux/slices/productSlice";
import loadinArrow from "../../assets/loadinArrow.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Shop = () => {
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.product);
  // const [hideMoreProducts, setHideMoreProducts] = useState(true);
  const [myProducts, setMyProducts] = useState([]);
  const [addToCartToggle, setAddToCartToggle] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [productsLimit, setProductsLimit] = useState(false);
  const { token } = useSelector((state) => state.login);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  useEffect(() => {
    function handleScroll() {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;

      if (scrollTop + clientHeight === scrollHeight) {
        // The end of scroll has been reached, do something here
        if (productsLimit) {
          setPage(page + 1);
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  useEffect(() => {
    if (token) {
      dispatch(fetch_products({ token, page, limit })).then((res) => {
        setMyProducts([...myProducts, ...res.payload.products]);
        if (!res.payload.products.length ) {
          setProductsLimit(false);
        } else {
          setProductsLimit(true);
        }
      });
    }
  }, [success, page]);

  useEffect(() => {
    if (addToCartToggle) {
      setShowToast(true);
    }
  }, [addToCartToggle]);

  useEffect(() => {
    if (showToast) {
      toast("Product added to cart");
      setAddToCartToggle(false);
      setShowToast(false);
    }
  }, [showToast]);

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
                addToCartToggle={addToCartToggle}
                setAddToCartToggle={setAddToCartToggle}
              />
            </div>
          );
        })}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Shop;
