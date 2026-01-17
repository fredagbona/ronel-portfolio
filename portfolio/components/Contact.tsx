
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 md:py-64 px-8 md:px-16 text-center scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold font-syne tracking-tighter mb-12">
          Donnons vie à votre vision<span className="text-[#007AFF]">.</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-500 font-light mb-16">
          Contactez-moi pour collaborer sur votre prochain projet mémorable.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a 
            href="mailto:ronelguidigan@gmail.com" 
            className="w-full md:w-auto text-lg font-bold px-12 py-6 bg-black text-white rounded-full hover:bg-[#007AFF] transition-all transform hover:scale-105 duration-300 flex items-center justify-center gap-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            Email
          </a>
          <a 
            href="https://wa.me/message/CQCD7SYIKXORG1" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto text-lg font-bold px-12 py-6 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all transform hover:scale-105 duration-300 flex items-center justify-center gap-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
