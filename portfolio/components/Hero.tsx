
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 overflow-hidden pt-20 bg-white">
      {/* Cinematic Bokeh Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-[10%] left-[20%] w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full bg-[#007AFF]/10 blur-[80px] md:blur-[120px] animate-float-slow"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div 
          className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] md:w-[35vw] md:h-[35vw] rounded-full bg-[#20C997]/10 blur-[70px] md:blur-[100px] animate-float-delayed"
          style={{ transform: `translateY(${scrollY * -0.15}px)` }}
        />
        <div 
          className="absolute top-[40%] right-[30%] w-[40vw] h-[40vw] md:w-[25vw] md:h-[25vw] rounded-full bg-[#F59E0B]/5 blur-[60px] md:blur-[80px] animate-float-fast"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Massive Typography with Responsive Scaling and Parallax Reveal */}
        <div className="relative py-4 mb-4 md:mb-8">
          <h1 
            className="text-[10.5vw] xs:text-[11vw] sm:text-[11vw] md:text-[10vw] font-extrabold leading-[0.9] md:leading-[0.85] tracking-tighter font-syne uppercase select-none whitespace-nowrap md:whitespace-normal"
            style={{ 
              transform: `translateY(${Math.min(scrollY * 0.1, 100)}px)`,
              opacity: Math.max(1 - scrollY / 700, 0)
            }}
          >
            L'ÉMOTION<br />
            <span className="relative inline-block">
              PAR LE
              <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-[#007AFF] via-[#20C997] to-[#007AFF] bg-[length:200%_auto] animate-gradient-flow">
                PAR LE
              </span>
            </span><br />
            MONTAGE.
          </h1>
        </div>
        
        <div 
          className="max-w-2xl px-4 transition-all duration-700"
          style={{ 
            opacity: Math.max(1 - scrollY / 450, 0),
            transform: `translateY(${scrollY * 0.05}px)`
          }}
        >
          <p className="text-base md:text-xl text-gray-500 font-light leading-relaxed mb-8 md:mb-12">
            Spécialiste du montage émotif, je transforme vos images en expériences mémorables via la maîtrise technique de DaVinci Resolve.
          </p>

          <div className="flex flex-col items-center gap-8 md:gap-12">
            <a 
              href="#portfolio" 
              className="group relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border border-gray-200 hover:border-[#007AFF] transition-all duration-500"
              aria-label="Voir le portfolio"
            >
              <div className="absolute inset-0 rounded-full border border-[#007AFF] scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" height="20" 
                className="md:w-6 md:h-6 group-hover:translate-y-1 transition-transform duration-300"
                viewBox="0 0 24 24" fill="none" 
                stroke="currentColor" strokeWidth="1.5" 
                strokeLinecap="round" strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </a>
            
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] text-gray-400 animate-bounce-slow">
              Découvrir
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -30px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, 20px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(40px, 40px); }
        }
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(10px); opacity: 1; }
        }
        .animate-float-slow { animation: float-slow 15s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 18s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 12s ease-in-out infinite; }
        .animate-gradient-flow { animation: gradient-flow 6s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;
