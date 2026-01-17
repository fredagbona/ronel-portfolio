
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Identity from './components/Identity';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Identity />
        <Portfolio />
        <Contact />
      </main>
      
      <footer className="py-12 border-t border-gray-100 px-8 md:px-16 bg-white flex flex-col md:flex-row justify-center items-center text-gray-400 text-[10px] uppercase tracking-widest">
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
          <span>© {currentYear} RN. Vidéo. Tous droits réservés.</span>
          <span className="hidden md:inline">|</span>
          <span>
            Designed by <a href="https://fredthedev.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#007AFF] transition-colors border-b border-transparent hover:border-[#007AFF]">FredTheDev</a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default App;
