import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center max-w-3xl mx-auto animate-fade-in py-12">
      <div className="space-y-10">
        {/* About Title - Sans Serif, Uppercase, Bold, tracking-wide (reminiscent of Introduction label but larger) */}
        <h1 className="font-sans text-2xl md:text-3xl font-bold text-academic-red uppercase tracking-[0.2em] mb-2">
          About
        </h1>
        
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-stone-600 font-light">
          I am a Research Associate at Stanford FSI.
        </h2>
        
        <div className="font-serif text-xl text-stone-500 leading-relaxed space-y-8 max-w-2xl">
          <p>
            My research focuses on the intersection of international security, technology policy, and data analysis. I explore how digital tools shape global narratives and influence decision-making processes.
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
                  <span className="font-serif italic text-academic-red text-lg">Est. 2025</span>
              </div>
          </div>
           <p className="mt-4 font-sans text-[10px] text-stone-400 uppercase tracking-widest">
            Stanford, CA
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;