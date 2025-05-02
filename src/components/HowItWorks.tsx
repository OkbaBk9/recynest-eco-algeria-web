
import React from "react";
import { motion } from "framer-motion";

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step = ({ number, title, description, icon }: StepProps) => {
  return (
    <div className="flex flex-col items-center">
      <motion.div 
        className="w-20 h-20 rounded-full bg-recynest-light flex items-center justify-center mb-4 border border-recynest-medium"
        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.div>
      <div className="bg-recynest-dark text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-3">
        {number}
      </div>
      <h3 className="text-lg font-bold mb-2 text-recynest-dark">{title}</h3>
      <p className="text-center text-muted-foreground">{description}</p>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-recynest-light/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center gradient-text">
          How It Works
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Join our recycling community in 3 simple steps and start earning rewards while making a positive impact on the environment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          <Step
            number={1}
            title="Drop Your Recyclables"
            description="Bring your sorted waste to any Recynest drop point across Algeria."
            icon={
              <svg className="w-10 h-10 text-recynest-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
              </svg>
            }
          />
          <Step
            number={2}
            title="Earn Rewards"
            description="Get paid instantly or accumulate eco-points for each recycling contribution."
            icon={
              <svg className="w-10 h-10 text-recynest-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            }
          />
          <Step
            number={3}
            title="Materials Get Recycled"
            description="Buyers collect in bulk and process materials for reuse in manufacturing."
            icon={
              <svg className="w-10 h-10 text-recynest-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
