// src/components/PlansSection.tsx
import React from 'react';
import { PlanCard } from './PlanCard';
import { plans } from '../constants';

export const PlansSection: React.FC = () => {
  return (
    <section id="plans" className="py-20 relative bg-gray-900">
      {/* Background effects */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Transformation Packages
          </h2>
          <p className="text-gray-300 text-lg">
            Choose the plan that fits your goals and lifestyle. All plans include personalized 
            attention and ongoing support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard key={plan.id} plan={plan} index={index} highlighted={index === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};