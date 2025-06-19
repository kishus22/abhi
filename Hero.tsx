import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (!headlineRef.current) return;
    
    const letters = headlineRef.current.innerText.split('');
    headlineRef.current.innerHTML = '';
    
    letters.forEach((letter, i) => {
      const span = document.createElement('span');
      span.textContent = letter === ' ' ? '\u00A0' : letter;
      span.style.animationDelay = `${i * 0.05}s`;
      span.className = 'inline-block opacity-0 animate-fade-in';
      headlineRef.current?.appendChild(span);
    });
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background video/image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg)',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/50 z-20"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-30 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 
            ref={headlineRef}
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Transform Your Body with Personalized Training
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Expert coaching, custom workout plans, and nutrition guidance designed to help you achieve your fitness goals.
          </p>
          
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfuH3jMqineuqI_Sjgotv_uWPyuOQ3piJ7ECZsqTksckOxRHQ/viewform?usp=header" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
          >
            <span className="relative z-10">Enroll Now</span>
            <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute -inset-10 blur-xl bg-purple-600/20 animate-pulse"></span>
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  );
};