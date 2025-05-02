
import React from "react";

const Mission = () => {
  return (
    <section id="mission" className="section-padding bg-recynest-light/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Our Mission
            </h2>
            <p className="text-muted-foreground mb-4">
              At Recynest, we're committed to transforming waste management in Algeria through technology, community engagement, and economic incentives.
            </p>
            <p className="text-muted-foreground mb-4">
              We believe that sustainable solutions must be financially viable, socially inclusive, and environmentally sound. That's why we've built a platform that rewards recycling while creating opportunities for collectors, processors, and consumers.
            </p>
            <p className="text-muted-foreground mb-6">
              By 2027, we aim to divert 50,000 tons of recyclable materials from landfills, support 1,000 green jobs, and collaborate with 100+ local businesses in creating a circular economy.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-recynest-medium/20 flex items-center justify-center mt-1">
                  <svg className="w-5 h-5 text-recynest-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-recynest-dark mb-1">Youth Empowerment</h3>
                  <p className="text-muted-foreground">Creating green entrepreneurship opportunities for young Algerians through our collection network and technical training.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-recynest-medium/20 flex items-center justify-center mt-1">
                  <svg className="w-5 h-5 text-recynest-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-recynest-dark mb-1">Women in Recycling</h3>
                  <p className="text-muted-foreground">Supporting women-led recycling initiatives and ensuring equal participation throughout our ecosystem.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-recynest-medium/20 flex items-center justify-center mt-1">
                  <svg className="w-5 h-5 text-recynest-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-recynest-dark mb-1">Circular Economy</h3>
                  <p className="text-muted-foreground">Fostering partnerships with manufacturers to close the recycling loop and create products from reclaimed materials.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-recynest-medium/20 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-recynest-dark">Our Impact So Far</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-recynest-dark mb-2">5+</div>
                  <p className="text-sm text-muted-foreground">Tons of Waste Recycled</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-recynest-dark mb-2">200+</div>
                  <p className="text-sm text-muted-foreground">Active Recyclers</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-recynest-dark mb-2">12</div>
                  <p className="text-sm text-muted-foreground">Collection Points</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-recynest-dark mb-2">8</div>
                  <p className="text-sm text-muted-foreground">Business Partners</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-recynest-medium/30">
                <h4 className="text-lg font-semibold mb-3 text-recynest-dark">Our Supporters</h4>
                <div className="flex flex-wrap gap-4">
                  <div className="w-16 h-16 bg-white/50 rounded-md flex items-center justify-center">
                    <div className="text-xs text-center text-muted-foreground">Partner Logo</div>
                  </div>
                  <div className="w-16 h-16 bg-white/50 rounded-md flex items-center justify-center">
                    <div className="text-xs text-center text-muted-foreground">Partner Logo</div>
                  </div>
                  <div className="w-16 h-16 bg-white/50 rounded-md flex items-center justify-center">
                    <div className="text-xs text-center text-muted-foreground">Partner Logo</div>
                  </div>
                  <div className="w-16 h-16 bg-white/50 rounded-md flex items-center justify-center">
                    <div className="text-xs text-center text-muted-foreground">Partner Logo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
