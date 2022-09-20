import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [quantityProducts] = useState(3);

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

  const lastProductIndex = currentPage * quantityProducts
  const firstProductIndex = lastProductIndex - quantityProducts
  const currentProducts = products.slice(firstProductIndex, lastProductIndex)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  return { };
}
