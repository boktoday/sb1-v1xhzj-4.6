import React from 'react';
import { Music2, Briefcase, Users, Brain, Award } from 'lucide-react';
import { AudioPlayer } from '../components/AudioPlayer';
import { audioSamples } from '../data/audioSamples';

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80"
            alt="Studio"
            className="w-full h-full object-cover opacity-20 scale-105 animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Let Music Transform
              <span className="block mt-2">
                Your <span className="text-purple-400">Business</span>
              </span>
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-8 max-w-3xl mx-auto text-gray-300">
              The Sound of{' '}
              <span className="text-purple-400 font-medium">Liaison</span>,{' '}
              <span className="text-purple-400 font-medium">Loyalty</span> and{' '}
              <span className="text-purple-400 font-medium">Learning</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/request"
                className="px-8 py-4 bg-purple-500 rounded-lg text-lg font-semibold hover:bg-purple-600 transition-all hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Create Your Song
              </a>
              <a
                href="/services"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-lg text-lg font-semibold hover:bg-white/20 transition-all hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>

      {/* Audio Samples Section */}
      <div className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Listen to Our Work</h2>
            <p className="text-gray-400">Experience the power of custom musical creations</p>
          </div>
          <div className="space-y-6">
            {audioSamples.map((sample, index) => (
              <AudioPlayer key={index} {...sample} />
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose The Businesss of Song?</h2>
            <p className="text-xl text-gray-400">Innovative solutions for modern businesses and individuals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Briefcase className="h-8 w-8" />,
                title: "Business Solutions",
                description: "Songs for marketing, loyalty, recognition, training, and events"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Personal Touch",
                description: "Unique musical gifts for special occasions and celebrations"
              },
              {
                icon: <Brain className="h-8 w-8" />,
                title: "AI and Automation",
                description: "Cutting-edge technology meets human creativity"
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Assignment of Commercial Rights",
                description: "We transfer commercial rights for your song to you"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/10"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-purple-500/20 text-purple-400 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Create Your Custom Song?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-400">
            Join the musical automation revolution and transform your message into unforgettable experiences
          </p>
          <a
            href="/contact"
            className="inline-block px-12 py-5 bg-purple-500 rounded-lg text-lg font-semibold hover:bg-purple-600 transition-all hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
};