import React, { useEffect, useState } from "react";
import Card from "./data/components/Card";

export default function ProductSection() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const response = await fetch(
      "https://mern-e-com-27wx.onrender.com/products/"
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
    <div className="">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Our Latest{" "}
        <span className="text-purple-700 dark:text-purple-500">Collection</span>{" "}
      </h1>
      {products && products.length > 0 ? (
        <div className="grid grid-cols-1 md:gap-4 md:grid-cols-2 lg:gap-8 lg:grid-cols-4 lg:grid-rows-2 pt-2">
          {products.map((product) => (
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
