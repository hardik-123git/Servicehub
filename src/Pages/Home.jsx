import React from "react";

import Navbar from "../components/common/Navbar";
import Hero from "../components/home/Hero";
import PopularServices from "../components/home/PopularServices";
import TopProfessionals from "../components/home/TopProfessionals";
import TrustFeatures from "../components/home/TrustFeatures";
import HowItWorks from "../components/home/HowItWorks";
import CTA from "../components/home/CTA";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <PopularServices />
        <TopProfessionals />
        <TrustFeatures />
        <HowItWorks />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default Home;