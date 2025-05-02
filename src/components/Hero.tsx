
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-hero-pattern relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            Recycling Made Rewarding with Recynest
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-muted-foreground">
            Drop off your recyclables. Earn rewards. Support a greener Algeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button className="glass-dark text-white text-lg rounded-full px-8 py-6 hover:bg-recynest-dark/90">
                Start Recycling
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button variant="outline" className="glass-button border-recynest-medium text-recynest-dark text-lg rounded-full px-8 py-6">
                Explore Drop Points
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-recynest-medium/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-recynest-medium/30 rounded-full blur-3xl"></div>
      
      {/* Animated floating elements */}
      <motion.div 
        animate={{ y: [0, -15, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-16 h-16 bg-recynest-light rounded-full blur-xl"
      ></motion.div>
      
      <motion.div 
        animate={{ y: [0, 15, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-recynest-medium/20 rounded-full blur-xl"
      ></motion.div>

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
