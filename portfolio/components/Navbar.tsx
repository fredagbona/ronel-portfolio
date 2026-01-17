
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize if larger than mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 py-6 px-6 md:px-16 flex justify-between items-center ${
          scrolled || mobileMenuOpen ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 py-4' : 'bg-transparent'
        }`}
      >
        <a href="#" className="text-xl md:text-2xl font-bold font-syne tracking-tighter uppercase group cursor-pointer z-[70]">
          RN<span className="text-[#007AFF]">.</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-bold uppercase tracking-widest hover:text-[#007AFF] transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#007AFF] transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          {/* Main CTA Button - Visible on Mobile and Desktop */}
          <a 
            href="#contact" 
            className="text-[10px] md:text-xs font-bold uppercase tracking-widest bg-black text-white px-4 py-2.5 md:px-6 md:py-3 rounded-full hover:bg-[#007AFF] transition-all active:scale-95 z-[70]"
          >
            CONTACT
          </a>

          {/* Hamburger Icon */}
          <button 
            className="md:hidden flex flex-col gap-1.5 z-[70] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-0.5 bg-black transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-black transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-black transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-[55] transition-transform duration-500 ease-in-out flex flex-col justify-center items-center gap-8 md:hidden ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={handleLinkClick}
            className="text-3xl font-bold font-syne uppercase tracking-tighter hover:text-[#007AFF] transition-colors"
          >
            {item.label}
          </a>
        ))}
        <div className="mt-12 flex flex-col items-center gap-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Suivez mon travail</p>
          <div className="flex gap-6">
            <a href="https://www.tiktok.com/@actuotaku" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest">TikTok</a>
            <a href="https://wa.me/message/CQCD7SYIKXORG1" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest">WhatsApp</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
