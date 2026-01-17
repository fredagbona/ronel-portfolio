
import React from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 px-4 md:px-16 bg-white scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-20 text-center">
        <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400 mb-4">Portfolio</h2>
        <div className="text-4xl md:text-6xl font-bold font-syne tracking-tight">Réalisations Récentes.</div>
      </div>

      {/* Grid Layout: 1 col on mobile, 2 on tablet, 3 on desktop */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 md:gap-y-32">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="relative group flex flex-col items-center"
          >
            {/* Minimalist Editing Frame (Source Monitor) */}
            <div className="w-full max-w-[360px] relative rounded-3xl overflow-hidden bg-black shadow-[0_32px_64px_-15px_rgba(0,0,0,0.3)] border-[10px] border-[#111827] transition-all duration-500 group-hover:shadow-[#007AFF]/10">
              {/* Discrete UI Accents */}
              <div className="absolute top-4 left-6 z-20 flex gap-1.5 opacity-40">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-gray-600" />
                <div className="w-2 h-2 rounded-full bg-gray-600" />
              </div>
              <div className="absolute bottom-4 right-6 z-20 text-[7px] font-mono text-white/30 uppercase tracking-[0.2em]">
                1080x1920 .MOV
              </div>

              {/* TikTok Video Embed */}
              <div className="w-full aspect-[9/16] transition-transform duration-700 group-hover:scale-[1.01]">
                <blockquote 
                  className="tiktok-embed w-full h-full" 
                  cite={project.videoUrl} 
                  data-video-id={project.videoUrl.split('/').pop()}
                  style={{ maxWidth: '100%', minWidth: '300px', height: '100%' }}
                >
                  <section>
                    <a target="_blank" title={`@ronel.guidigan`} href={project.videoUrl}>Visualiser sur TikTok</a>
                  </section>
                </blockquote>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Final Call to Action */}
      <div className="mt-32 md:mt-48 flex flex-col items-center">
        <div className="w-12 h-px bg-gray-200 mb-12" />
        <p className="text-gray-400 text-sm mb-10 font-light italic">Ma filmographie complète est disponible sur mes réseaux.</p>
        <a 
          href="https://www.tiktok.com/@ronel.guidigan" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-4 px-12 py-6 bg-black text-white rounded-full hover:bg-[#007AFF] transition-all duration-500 font-bold uppercase tracking-widest text-xs shadow-xl hover:shadow-[#007AFF]/20"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.31-.75.42-1.24 1.25-1.33 2.1-.1.7.1 1.41.53 1.98.5.73 1.34 1.19 2.23 1.25 1.16.03 2.29-.53 2.87-1.52.2-.31.33-.66.38-1.02.06-2.11.02-4.22.02-6.33V0h.01z"/>
          </svg>
          Explorer tout le travail
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
