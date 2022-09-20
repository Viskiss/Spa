import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import filterProductReducer from "../Filter/FilterProductReducer";

export const ShopContext = React.createContext();

const ShopContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [filterProduct, dispatchFilterProducts] = React.useReducer(filterProductReducer,"ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const [quantityProducts] = useState(3);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://fakestoreapi.com/products?limit=20"
      );
      setProducts(response.data);
      setLoading(false);
    };
    getProducts();
  }, []);

  const lastProductIndex = currentPage * quantityProducts;
  const firstProductIndex = lastProductIndex - quantityProducts;
  const currentProducts = products.slice(firstProductIndex, lastProductIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <ShopContext.Provider
      value={{
        dispatchFilterProducts,
        filterProduct,
        loading,
        setLoading,
        products,
        paginate,
        currentProducts
      }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
