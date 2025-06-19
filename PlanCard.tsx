import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { type Plan } from '../types';

interface PlanCardProps {
  plan: Plan;
  index: number;
  highlighted?: boolean; // <-- You must accept this prop
}

export const PlanCard: React.FC<PlanCardProps> = ({ plan, index, highlighted }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative rounded-2xl transition-all duration-500 ${
        highlighted ? 'lg:-mt-8' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${
        index === 0 ? 'from-blue-600/20 to-purple-600/20' :
        index === 1 ? 'from-purple-600/20 to-pink-600/20' :
        'from-pink-600/20 to-orange-600/20'
      } rounded-2xl blur-xl transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-60'
      }`}></div>
      
      {/* Plan card */}
      <div className={`relative h-full backdrop-blur-sm bg-gray-900/80 border border-gray-700/50 rounded-2xl overflow-hidden transition-transform duration-500 ${
        isHovered ? 'transform scale-105 shadow-xl shadow-purple-600/20' : ''
      }`}>
        {/* Plan highlight tag - only for middle plan */}
        {highlighted && (
          <div className="absolute top-0 right-0 left-0">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold uppercase py-1 px-4 text-center">
              Most Popular
            </div>
          </div>
        )}
        
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
          <p className="text-gray-400 mb-6">{plan.description}</p>
          
          <div className="mb-8">
            {plan.priceOptions.map((option, i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-gray-700/50">
                <span className="text-gray-300">{option.duration}</span>
                <span className="font-bold text-purple-400">{option.price}</span>
              </div>
            ))}
          </div>
          
          <ul className="space-y-4 mb-8">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          
          <a 
            href="https://forms.gle/qbNBPsh2WCpWKwzo6" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`block w-full py-3 px-4 text-center rounded-full font-medium transition-all duration-300 ${
              highlighted 
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-600/20' 
                : 'bg-gray-800 border border-gray-700 text-white hover:bg-gray-700'
            }`}
          >
            Choose Plan
          </a>
        </div>
      </div>
    </div>
  );
};
