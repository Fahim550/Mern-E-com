import React, { useContext } from "react";
import Navbar from "../../shared/navbar/Navbar";
import Footer from "../../shared/footer/Footer";
import SelectedProduct from "./components/SelectedProduct";
import { stateContext } from "../../../App";

export default function Cart() {
  return (
    <div>
      <Navbar />
      <div className="pt-16 w-10/12  mx-auto ">
        <SelectedProduct />
        <Footer />
      </div>
    </div>
  );
}
