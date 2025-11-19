import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center max-w-3xl mx-auto animate-fade-in py-12">
      <div className="space-y-12">
        <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-academic-red"></div>
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-academic-red font-semibold">Introduction</p>
        </div>
        
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-charcoal font-light">
          I am a researcher and visual storyteller based in Copenhagen. 
        </h2>
        
        <div className="font-serif text-2xl text-stone-500 leading-relaxed space-y-8 max-w-2xl">
          <p>
            Currently pursuing my Ph.D., I explore the subtle nuances of <span className="text-charcoal underline decoration-academic-red/50 decoration-1 underline-offset-4 hover:decoration-academic-red transition-all duration-300">human-computer interaction</span>, focusing on how digital environments shape our perception of reality.
          </p>
          <p className="text-xl">
            When not writing, I document the quiet corners of the world through my lens. 
            I believe in design that whispers rather than shouts.
          </p>
        </div>

        <div className="pt-12">
          <div className="relative inline-block">
              <img 
                src="https://picsum.photos/900/450?grayscale" 
                alt="Desk setup" 
                className="w-full h-72 object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-1000 ease-in-out"
              />
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-paper border-l border-t border-stone-300 hidden md:flex items-center justify-center">
                  <span className="font-serif italic text-academic-red text-lg">Est. 2024</span>
              </div>
          </div>
           <p className="mt-4 font-sans text-[10px] text-stone-400 uppercase tracking-widest">
            Studio Space / Copenhagen
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;