import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { stateContext } from "../../../../App";
import Card from "./Card";

export default function SelectedProduct() {
  const [stateData, setStateData] = useContext(stateContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const response = await fetch(
      "https://mernecombackend.vercel.app/products/"
    );
    const productResponseData = await response.json();
    console.log("productResponseData", productResponseData.products);
    if (productResponseData.products.length > 0) {
      setProducts(productResponseData.products);
    } else {
      setProducts([]);
    }
  }
  return (
    <div className="h-screen">
      <div className="flex justify-around items-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Your Cart{" "}
          <span className="text-purple-700 dark:text-purple-500">Products</span>{" "}
        </h1>
        {stateData.products && stateData.products.length > 0 ? (
          <Link
            to="/payment"
            type="button"
            className="text-white justify-center items-center h-12 ml-3 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 "
          >
            Order Now!
          </Link>
        ) : (
          <h3></h3>
        )}
      </div>
      {stateData.products && stateData.products.length > 0 ? (
        <div className="grid grid-cols-1 md:gap-4 md:grid-cols-2 lg:gap-8 lg:grid-cols-4 lg:grid-rows-2 pt-2">
          {stateData.products.map((product) => (
            <div key={product} className="">
              <Card product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1>There is no product available</h1>
        </div>
      )}
    </div>
  );
}
