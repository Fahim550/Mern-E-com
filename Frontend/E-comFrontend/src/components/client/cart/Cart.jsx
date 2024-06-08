import React from "react";
import Footer from "../../shared/footer/Footer";
import Navbars from "../../shared/navbar/Navbars";
import SelectedProduct from "./components/SelectedProduct";

export default function Cart() {
  return (
    <div>
      <Navbars />
      <div className="pt-16 w-10/12  mx-auto ">
        <SelectedProduct />
        <Footer />
      </div>
    </div>
  );
}
