import React from 'react';
import { TrainerCard } from './TrainerCard';
import { trainers } from '../constants';

export const TrainerSection: React.FC = () => {
  return (
    <section id="trainers" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-pink-600/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Meet Our Expert Trainer
          </h2>
          <p className="text-gray-300 text-lg">
            Our certified professional are passionate about helping you achieve your fitness goals
            with personalized training programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {trainers.map((trainer, index) => (
            <TrainerCard key={trainer.id} trainer={trainer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};