import React, { useState } from 'react';
import { type Trainer } from '../types';

interface TrainerCardProps {
  trainer: Trainer;
  index: number;
}

export const TrainerCard: React.FC<TrainerCardProps> = ({ trainer, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const animationDelay = `${index * 0.2}s`;

  return (
    <div
      className="group relative w-full max-w-sm mx-auto"
      style={{ animationDelay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-aos="fade-up"
      data-aos-delay={index * 200}
    >
      <div
        className={`relative rounded-xl overflow-hidden transition-all duration-500 transform ${
          isHovered ? 'scale-105 shadow-2xl shadow-purple-600/20' : 'scale-100 shadow-xl'
        }`}
      >
        {/* Trainer image */}
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-[450px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#5b0d80]/80 to-[#ec4899]/30 z-10 pointer-events-none" />

        {/* Card content */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-6 z-20 transition-all duration-500 ${
            isHovered ? 'h-3/4' : 'h-auto'
          }`}
        >
          <div className="flex flex-col h-full">
            <h3 className="text-purple-300 text-2xl font-bold mb-1">{trainer.name}</h3>
            <p className="text-gray-300 text-sm mb-4">{trainer.title}</p>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                isHovered ? 'opacity-100 flex-grow' : 'opacity-0 h-0'
              }`}
            >
              <p className="text-purple-100 text-sm mb-4">{trainer.bio}</p>
              <div className="space-y-2">
                {trainer.certifications.map((cert, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                    <span className="text-sm text-purple-100">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tilt glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-300 animate-tilt"></div>
      </div>
    </div>
  );
};
