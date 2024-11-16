import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center p-8 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors group">
      <div className="inline-flex items-center justify-center mb-4 text-purple-500 group-hover:text-purple-600 transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};