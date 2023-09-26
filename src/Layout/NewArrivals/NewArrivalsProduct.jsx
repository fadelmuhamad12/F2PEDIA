import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick/lib/slider";
import ButtonViewAll from "../../Components/ButtonViewAll";
import { Card, Col, Image } from "react-bootstrap";

const NewArrivalsProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const allProducts = await axios.get("https://fakestoreapi.com/products");
      console.log(allProducts.data);
      setAllProducts(allProducts.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 ">
        {allProducts.slice(0, 4).map((product) => {
          return (
            <div className=" justify-center text-center cursor-pointer hover:scale-110 duration-300  mt-2">
              <Card>
                <Image
                  src={product.image}
                  width={"100px"}
                  className="mx-auto"
                />
              <Card.Footer className="mt-2">
                <Card.Title className="font-bold">{product.title}</Card.Title>
                <p >Rating: {product.rating.rate}</p>

                <p className="font-bold">$ {product.price}</p>
                </Card.Footer>
              </Card>
            </div>
          );
        })}
      </div>
      <ButtonViewAll />
    </>
  );
};

export default NewArrivalsProduct;
