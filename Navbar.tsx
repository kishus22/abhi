import React, { useState, useEffect } from 'react';
import { Dumbbell, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/90 backdrop-blur-sm py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-2xl font-bold text-white">
          <Dumbbell className="w-8 h-8 text-purple-500" />
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">FitForce</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6">
            <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
            <a href="#trainers" className="text-white/80 hover:text-white transition-colors">Trainer</a>
            <a href="#plans" className="text-white/80 hover:text-white transition-colors">Plans</a>
            <a href="#certificates" className="text-white/80 hover:text-white transition-colors">Certificates</a>
          </nav>
          
          
        </div>
        
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-white p-2"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-gray-800">
          <nav className="flex flex-col p-6 gap-4">
            <a 
              href="#home" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#trainers" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Trainers
            </a>
            <a 
              href="#plans" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Plans
            </a>
            <a 
              href="#certificates" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Certificates
            </a>
            <a 
              href="#enroll" 
              className="mt-2 text-center px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Enroll Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};