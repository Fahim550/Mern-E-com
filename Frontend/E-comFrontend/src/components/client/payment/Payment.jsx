import React from "react";
import Navbar from "../../shared/navbar/Navbar";
import PaymentSection from "./components/PaymentSection";
import Footer from "../../shared/footer/Footer";

export default function Payment() {
  return (
    <div>
      <Navbar />
      <div className="w-10/12 mx-auto pt-16">
        <PaymentSection />
        <Footer />
      </div>
    </div>
  );
}
