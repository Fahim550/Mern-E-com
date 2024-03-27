import React from "react";
import Footer from "../shared/footer/Footer";
import Navbar from "../shared/navbar/Navbar";
import HeroSection from "./components/hero-section/HeroSection";
import SocialProof from "./components/social-proof/SocialProof";
import Testimonials from "./components/testimonials/Testimonials";
import ProductSection from "../client/product/components/ProductSection";

export default function Home() {
  return (
    <div className="pt-16">
      <Navbar />
      <div className="w-10/12 mx-auto ">
        <HeroSection />
        <ProductSection />
        <Testimonials />
        <SocialProof />
      </div>
      <Footer />
    </div>
  );
}
