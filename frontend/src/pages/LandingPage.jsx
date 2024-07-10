import React from "react";
import Hero from "../components/Hero";
import Endorsements from "../components/Endorsements";
import Features from "../components/Features";
import Developers from "../components/Developers";
import Footer from "../components/Footer";
import Redirection from "../components/Redirection";

function LandingPage() {
  return (
    <>
      <Hero />
      <Endorsements />
      
      <h2 id="features" className="text-3xl font-semibold tracking-tight bg-gradient-to-b from-slate-400 to-black text-transparent bg-clip-text sm:text-5xl text-center pb-16 pt-28">
        100% more sales
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Features />
          <Developers />
        </div>
      </div>
      <Redirection />
      <Footer />
    </>
  );
}

export default LandingPage;