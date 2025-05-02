
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import DropPointsMap from "@/components/DropPointsMap";
import Marketplace from "@/components/Marketplace";
import Rewards from "@/components/Rewards";
import Mission from "@/components/Mission";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <DropPointsMap />
        <Marketplace />
        <Rewards />
        <Mission />
        <Testimonials />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
