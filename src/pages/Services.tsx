import React from 'react';
import { Briefcase, Heart, GraduationCap } from 'lucide-react';
import { CategoryCard } from '../components/CategoryCard';
import { ServiceCard } from '../components/ServiceCard';
import { AudioPlayer } from '../components/AudioPlayer';
import { services } from '../data/services';
import { audioSamples } from '../data/audioSamples';

export const Services = () => {
  const categories = [
    {
      icon: <Briefcase className="h-12 w-12 text-purple-500" />,
      title: "Liaison",
      description: "Foster meaningful connections within your organization and with clients through music."
    },
    {
      icon: <Heart className="h-12 w-12 text-purple-500" />,
      title: "Loyalty",
      description: "Build lasting relationships and strengthen customer bonds with personalized musical experiences."
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-purple-500" />,
      title: "Learning",
      description: "Transform training and development into engaging musical journeys that stick."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80"
            alt="Music Studio"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Use Song to Influence
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Custom musical solutions designed to enhance engagement, learning, and connection in your organization
          </p>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </div>

      {/* Audio Samples Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample Our Work</h2>
            <p className="text-gray-600">Listen to examples of our custom musical solutions</p>
          </div>
          <div className="space-y-4">
            {audioSamples.map((sample, index) => (
              <AudioPlayer key={index} {...sample} />
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Musical Solutions</h2>
            <p className="text-xl text-gray-600">Tailored services to meet your unique business needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                icon={<service.icon className="h-8 w-8" />}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Business with Music?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create something unique together that resonates with your team and customers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/request"
              className="px-8 py-3 bg-purple-500 rounded-md text-lg font-semibold hover:bg-purple-600 transition-colors"
            >
              Start Your Project
            </a>
            <a
              href="/contact"
              className="px-8 py-3 bg-gray-700 rounded-md text-lg font-semibold hover:bg-gray-600 transition-colors"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};