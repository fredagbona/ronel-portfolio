
import React from 'react';
import { NodeTree } from './BackgroundGraphics';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 md:py-48 px-8 md:px-16 bg-white relative overflow-hidden scroll-mt-20">
      <NodeTree className="absolute -right-20 top-20 w-1/3 text-gray-400 opacity-20 pointer-events-none" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-syne">Le parcours d'un autodidacte passionné.</h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light mb-6">
            Je suis Ronel Guidigan, monteur autodidacte, mon parcours est guidé par la curiosité et l'exigence. 
          </p>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            Formé via les certifications officielles DaVinci Resolve, je transforme chaque défi technique en opportunité d'apprentissage. Mon approche est simple : apprendre, maîtriser, et appliquer avec précision.
          </p>
        </div>

        <div className="relative group">
          <div className="aspect-[4/5] bg-gray-100 overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700">
            <img 
              src="https://picsum.photos/seed/editor/800/1000" 
              alt="Ronel Guidigan" 
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-[#007AFF] text-white p-8 md:p-12">
            <div className="text-5xl font-bold font-syne mb-2">50+</div>
            <div className="text-xs uppercase tracking-[0.2em] font-bold opacity-80">Projets Livrés</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
