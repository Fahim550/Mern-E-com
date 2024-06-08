import React from "react";
import ProductSection from "../client/product/components/ProductSection";
import Footer from "../shared/footer/Footer";
import Navbars from "../shared/navbar/Navbars";
import HeroSection from "./components/hero-section/HeroSection";
import SocialProof from "./components/social-proof/SocialProof";
import Testimonials from "./components/testimonials/Testimonials";

export default function Home() {
  return (
    <div className="pt-16">
      <Navbars />
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
