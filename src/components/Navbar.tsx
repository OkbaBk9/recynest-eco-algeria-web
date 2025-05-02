
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search, Home, ShoppingBag, Gift, Landmark, MapPin, User } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { title: 'How It Works', icon: <Home size={18} />, href: '#how-it-works' },
    { title: 'Drop Points', icon: <MapPin size={18} />, href: '#drop-points' },
    { title: 'Marketplace', icon: <ShoppingBag size={18} />, href: '#marketplace' },
    { title: 'Rewards', icon: <Gift size={18} />, href: '#rewards' },
    { title: 'Our Mission', icon: <Landmark size={18} />, href: '#our-mission' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-2 px-6 md:px-12' : 'bg-transparent py-4 px-6 md:px-12'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-recynest-medium to-recynest-dark flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">R</span>
          </div>
        </motion.div>

        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-foreground flex items-center gap-2 hover:text-recynest-dark transition-colors relative group py-2"
            >
              <span className="text-recynest-dark">{item.icon}</span>
              <span>{item.title}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-recynest-medium group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative"
          >
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-full border border-border glass-morphism text-sm focus:outline-none focus:ring-2 focus:ring-recynest-medium w-40 transition-all focus:w-56"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button className="bg-recynest-dark hover:bg-recynest-dark/90 text-white rounded-full px-6 flex items-center gap-2">
              <User size={18} />
              <span>Sign In</span>
            </Button>
          </motion.div>
        </div>

        <button 
          className="lg:hidden p-2 rounded-full glass-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-recynest-dark"
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
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="container mx-auto mt-4 lg:hidden glass-morphism rounded-xl my-2 mx-4"
        >
          <div className="flex flex-col space-y-4 p-4">
            {navItems.map((item) => (
              <a 
                key={item.title}
                href={item.href}
                className="text-foreground hover:text-recynest-dark transition-colors p-2 rounded-lg hover:bg-recynest-light/30 flex items-center gap-3"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="bg-recynest-dark/10 p-2 rounded-full text-recynest-dark">{item.icon}</span>
                {item.title}
              </a>
            ))}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-border bg-white/50 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:ring-recynest-medium"
              />
            </div>
            <Button className="bg-recynest-dark hover:bg-recynest-dark/90 text-white rounded-full flex items-center justify-center gap-2">
              <User size={18} />
              <span>Sign In</span>
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
