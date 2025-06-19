import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { certificates } from '../constants';

export const CertificatesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const next = () => {
    setActiveIndex((prev) => (prev + 1) % certificates.length);
  };
  
  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };
  
  return (
    <section id="certificates" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-600/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Our Certifications & Awards
          </h2>
          <p className="text-gray-300 text-lg">
            Our trainers hold prestigious certifications and have received recognition for 
            successful client transformations.
          </p>
        </div>
        
        {/* Certificate Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {certificates.map((cert, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="backdrop-blur-sm bg-gray-800/50 border border-gray-700/50 rounded-xl overflow-hidden p-8 h-full">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="w-full md:w-1/2">
                        <img 
                          src={cert.image} 
                          alt={cert.title} 
                          className="w-full h-64 object-cover rounded-lg shadow-lg"
                        />
                      </div>
                      <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-bold mb-3">{cert.title}</h3>
                        <p className="text-gray-400 mb-2">{cert.issuer}</p>
                        <p className="text-gray-400 mb-4">{cert.date}</p>
                        <p className="text-gray-300">{cert.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 bg-gray-900/80 backdrop-blur-sm p-3 rounded-full border border-gray-700/50 text-white/80 hover:text-white transition-colors"
            aria-label="Previous certificate"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 bg-gray-900/80 backdrop-blur-sm p-3 rounded-full border border-gray-700/50 text-white/80 hover:text-white transition-colors"
            aria-label="Next certificate"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
          
          {/* Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index
                    ? 'bg-purple-500 w-6'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to certificate ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};