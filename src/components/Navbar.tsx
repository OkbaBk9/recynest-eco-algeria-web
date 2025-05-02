
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card py-4 px-6 md:px-12">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-recynest-medium to-recynest-dark flex items-center justify-center">
            <span className="text-white font-bold text-lg">R</span>
          </div>
          <span className="text-recynest-dark font-bold text-xl">Recynest</span>
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          <a href="#how-it-works" className="text-foreground hover:text-recynest-dark transition-colors">
            How It Works
          </a>
          <a href="#drop-points" className="text-foreground hover:text-recynest-dark transition-colors">
            Drop Points
          </a>
          <a href="#marketplace" className="text-foreground hover:text-recynest-dark transition-colors">
            Marketplace
          </a>
          <a href="#rewards" className="text-foreground hover:text-recynest-dark transition-colors">
            Rewards
          </a>
          <a href="#mission" className="text-foreground hover:text-recynest-dark transition-colors">
            Our Mission
          </a>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-full border border-border bg-background/80 text-sm focus:outline-none focus:ring-2 focus:ring-recynest-medium"
            />
          </div>
          <Button className="bg-recynest-dark hover:bg-recynest-dark/90 text-white rounded-full px-6">
            Sign In
          </Button>
        </div>

        <button 
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="container mx-auto mt-4 lg:hidden">
          <div className="flex flex-col space-y-4 pb-4">
            <a href="#how-it-works" className="text-foreground hover:text-recynest-dark transition-colors">
              How It Works
            </a>
            <a href="#drop-points" className="text-foreground hover:text-recynest-dark transition-colors">
              Drop Points
            </a>
            <a href="#marketplace" className="text-foreground hover:text-recynest-dark transition-colors">
              Marketplace
            </a>
            <a href="#rewards" className="text-foreground hover:text-recynest-dark transition-colors">
              Rewards
            </a>
            <a href="#mission" className="text-foreground hover:text-recynest-dark transition-colors">
              Our Mission
            </a>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-border bg-background/80 text-sm focus:outline-none focus:ring-2 focus:ring-recynest-medium"
              />
            </div>
            <Button className="bg-recynest-dark hover:bg-recynest-dark/90 text-white rounded-full">
              Sign In
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
