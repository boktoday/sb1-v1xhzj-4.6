import React from 'react';
import { Brain, Heart, TrendingUp, Users, Zap, Music2, BookOpen, BarChart, Target, Lightbulb } from 'lucide-react';

export const WhySong = () => {
  const benefits = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Cognitive Enhancement",
      description: "Music improves memory retention, learning speed, and information processing in training materials."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Emotional Connection",
      description: "Create deeper bonds with employees and customers through memorable musical experiences."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Increased Engagement",
      description: "Boost participation and interaction in corporate communications and training."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Cohesion",
      description: "Strengthen team unity and company culture through shared musical experiences."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Enhanced Productivity",
      description: "Improve workplace efficiency and focus through strategic use of music."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Brand Recognition",
      description: "Create memorable brand experiences that resonate with your audience."
    }
  ];

  const books = [
    {
      title: "This Is Your Brain on Music",
      author: "Daniel J. Levitin",
      description: "Understanding a Human Obsession - Explore how music affects our brains and shapes our thoughts, feelings, and memories.",
      image: "https://images-na.ssl-images-amazon.com/images/P/0241987350.01.L.jpg",
      link: "https://www.amazon.com.au/This-Your-Brain-Music-Understanding/dp/0241987350/"
    },
    {
      title: "Music, Math, and Mind",
      author: "David Sulzer",
      description: "The Physics and Neuroscience of Music - Discover the fascinating intersection of science and sound.",
      image: "https://images-na.ssl-images-amazon.com/images/P/0231193793.01.L.jpg",
      link: "https://www.amazon.com.au/Music-Math-Mind-Physics-Neuroscience/dp/0231193793/"
    },
    {
      title: "Have You Heard Your Favourite Song?",
      author: "Yvette Nolan",
      description: "A journey through the psychology of music and its profound impact on our emotions and behavior.",
      image: "https://images-na.ssl-images-amazon.com/images/P/191448715X.01.L.jpg",
      link: "https://www.amazon.com.au/Have-Heard-Your-Favourite-Song/dp/191448715X/"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80"
            alt="Music Impact"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Music2 className="h-16 w-16 mx-auto mb-6 text-purple-400" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            The Power of Music in Business
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Discover how music can transform your organization's communication, learning, and engagement
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Science Behind Music's Impact</h2>
            <p className="text-xl text-gray-600">
              Understanding how music shapes behavior and decision-making
            </p>
          </div>
          <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/gAl2I30SoTA"
              title="The Power of Music in Business"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Lightbulb className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Why Music Matters in Business</h2>
            <p className="text-xl text-gray-600">
              Leverage the power of music to transform your organization
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100 text-purple-500 mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BarChart className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">The Impact in Numbers</h2>
            <p className="text-xl text-gray-300">
              Research-backed statistics on music's business impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "65%", description: "Increase in information retention when using musical mnemonics" },
              { number: "87%", description: "Of employees report higher productivity with strategic music use" },
              { number: "73%", description: "Of customers recall brands better with musical associations" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 bg-white/5 rounded-xl backdrop-blur-sm">
                <div className="text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                <p className="text-gray-300">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended Reading Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BookOpen className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Recommended Reading</h2>
            <p className="text-xl text-gray-600">
              Deepen your understanding of music's impact on business and human behavior
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {books.map((book, index) => (
              <a
                key={index}
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex"
              >
                <div className="w-1/3 relative overflow-hidden">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="w-2/3 p-4">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-purple-600 transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">by {book.author}</p>
                  <p className="text-gray-700 text-sm">{book.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Business with Music?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Let's create a custom musical solution that drives results for your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/request"
              className="px-8 py-3 bg-purple-500 rounded-lg text-lg font-semibold hover:bg-purple-600 transition-colors"
            >
              Start Your Project
            </a>
            <a
              href="/contact"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};