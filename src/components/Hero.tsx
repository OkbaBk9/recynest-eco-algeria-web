
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-hero-pattern relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            Recycling Made Rewarding with Recynest
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-muted-foreground">
            Drop off your recyclables. Earn rewards. Support a greener Algeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-recynest-dark hover:bg-recynest-dark/90 text-white text-lg rounded-full px-8 py-6">
              Start Recycling
            </Button>
            <Button variant="outline" className="border-recynest-medium text-recynest-dark hover:bg-recynest-medium/10 text-lg rounded-full px-8 py-6">
              Explore Drop Points
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-recynest-medium/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-recynest-medium/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#F9FFE8"
            fillOpacity="1"
            d="M0,256L48,240C96,224,192,192,288,186.7C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
