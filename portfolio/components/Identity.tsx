
import React from 'react';

const Identity: React.FC = () => {
  return (
    <section id="method" className="py-32 md:py-48 px-8 md:px-16 bg-[#0B0D11] text-white overflow-hidden scroll-mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-[#007AFF] mb-12">Mon Identité</h2>
        <div className="text-5xl md:text-7xl lg:text-8xl font-bold font-syne tracking-tighter mb-12">
          Le rythme <span className="italic opacity-50">&</span> l'émotion.
        </div>
        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
          Qu'il s'agisse de documentaires narratifs touchants ou de publicités ultra-rythmées, mon approche reste la même : une rigueur professionnelle absolue au service de votre message. Je ne me contente pas de couper des clips, je compose une symphonie visuelle.
        </p>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          <div className="border-t border-white/10 pt-8">
            <h3 className="text-xl font-bold mb-4 font-syne">Montage Narratif</h3>
            <p className="text-sm text-gray-400 font-light">Structure du récit, gestion des silences et arc émotionnel pour captiver l'audience.</p>
          </div>
          <div className="border-t border-white/10 pt-8">
            <h3 className="text-xl font-bold mb-4 font-syne">Color Grading</h3>
            <p className="text-sm text-gray-400 font-light">Correction colorimétrique précise et "look design" via les nodes de DaVinci Resolve.</p>
          </div>
          <div className="border-t border-white/10 pt-8">
            <h3 className="text-xl font-bold mb-4 font-syne">Sound Design</h3>
            <p className="text-sm text-gray-400 font-light">Intégration sonore immersive pour renforcer l'impact psychologique de chaque image.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Identity;
