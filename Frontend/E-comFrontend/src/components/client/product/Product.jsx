import React, { useContext } from "react";
import { stateContext } from "../../../App";
import Footer from "../../shared/footer/Footer";
import Navbars from "../../shared/navbar/Navbars";
import ProductSection from "./components/ProductSection";

export default function Product() {
  const [stateData, setStateData] = useContext(stateContext);
  console.log("stateData", stateData);
  return (
    <div>
      <Navbars />
      <div className="w-10/12 mx-auto">
        <ProductSection />
        <Footer />
      </div>
    </div>
  );
}
