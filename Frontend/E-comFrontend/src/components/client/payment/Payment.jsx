import React from "react";
import Footer from "../../shared/footer/Footer";
import Navbars from "../../shared/navbar/Navbars";
import PaymentSection from "./components/PaymentSection";

export default function Payment() {
  return (
    <div>
      <Navbars />
      <div className="w-10/12 mx-auto pt-16">
        <PaymentSection />
        <Footer />
      </div>
    </div>
  );
}
