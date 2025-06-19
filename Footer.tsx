import React from 'react';
import { Dumbbell, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-16 pb-8 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <a href="#" className="flex items-center gap-2 text-2xl font-bold text-white mb-4">
              <Dumbbell className="w-7 h-7 text-purple-500" />
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">FitForce</span>
            </a>
            <p className="text-gray-400 mb-6">
              Transform your body and mind with our expert personal training services.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/getfitwith.abhi?igsh=MWVyc3dicDltcmc0bw%3D%3D&utm_source=qr" className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#trainers" className="text-gray-400 hover:text-white transition-colors">Our Trainers</a></li>
              <li><a href="#plans" className="text-gray-400 hover:text-white transition-colors">Training Plans</a></li>
              <li><a href="#certificates" className="text-gray-400 hover:text-white transition-colors">Certifications</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Personal Training</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Nutrition Coaching</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Online Coaching</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Supplement Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <span className="block">Email:</span>
                <a href="abhishek748385@gmail.com" className="text-purple-400 hover:text-purple-300">abhishek748385@gmail.com</a>
              </li>
              <li className="text-gray-400">
                <span className="block">Phone:</span>
                <a href="tel:+91 9591315328 , +91 7483982134" className="text-purple-400 hover:text-purple-300">+91 9591315328 , +91 7483982134</a>
              </li>
             
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} AKTEK dynamics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};