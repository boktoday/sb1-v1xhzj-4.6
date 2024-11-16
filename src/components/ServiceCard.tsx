import React from 'react';
import { Sparkles } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  category: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  features, 
  category 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="p-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-500 mb-4">
          {icon}
        </div>
        <span className="inline-block px-3 py-1 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full mb-4">
          {category}
        </span>
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <Sparkles className="h-4 w-4 text-purple-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <a
          href="/request"
          className="block text-center py-2 px-4 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors"
        >
          Request This Service
        </a>
      </div>
    </div>
  );
};