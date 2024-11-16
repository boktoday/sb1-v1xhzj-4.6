import React from 'react';
import { Menu, X, Music2 } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Music2 className="h-8 w-8 text-purple-400" />
            <span className="ml-2 text-xl font-bold">THE BUSINESS OF SONG</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="px-3 py-2 hover:text-purple-400 transition-colors">Home</a>
              <a href="/services" className="px-3 py-2 hover:text-purple-400 transition-colors">Services</a>
              <a href="/why-song" className="px-3 py-2 hover:text-purple-400 transition-colors">Why Song?</a>
              <a href="/faq" className="px-3 py-2 hover:text-purple-400 transition-colors">FAQ</a>
              <a href="/request" className="px-3 py-2 hover:text-purple-400 transition-colors">Request Song</a>
              <a href="/contact" className="px-4 py-2 bg-purple-500 rounded-md hover:bg-purple-600 transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Home</a>
            <a href="/services" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Services</a>
            <a href="/why-song" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Why Song?</a>
            <a href="/faq" className="block px-3 py-2 hover:bg-gray-800 rounded-md">FAQ</a>
            <a href="/request" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Request Song</a>
            <a href="/contact" className="block px-3 py-2 bg-purple-500 text-white rounded-md">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};