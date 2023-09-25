import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchAllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const allProducts = await axios.get("https://fakestoreapi.com/products");
      console.log(allProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return <div></div>;
};

export default FetchAllProducts;
