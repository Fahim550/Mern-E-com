import React, { useContext } from "react";
import Navbar from "../../shared/navbar/Navbar";
import Footer from "../../shared/footer/Footer";
import ProductSection from "./components/ProductSection";
import { stateContext } from "../../../App";

export default function Product() {
  const [stateData, setStateData] = useContext(stateContext);
  console.log("stateData",stateData);
  return (
    <div>
      <Navbar />
      <div className="w-10/12 mx-auto">
        <ProductSection />
        <Footer />
      </div>
    </div>
  );
}
