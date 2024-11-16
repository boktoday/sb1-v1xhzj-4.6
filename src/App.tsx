import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { FAQ } from './pages/FAQ';
import { RequestSong } from './pages/RequestSong';
import { Contact } from './pages/Contact';
import { WhySong } from './pages/WhySong';

export const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/why-song" element={<WhySong />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/request" element={<RequestSong />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};