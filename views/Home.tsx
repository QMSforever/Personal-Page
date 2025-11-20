import React, { useMemo } from 'react';
import { Linkedin, Mail, Github } from 'lucide-react';

// Feature image from Google Drive
// Using the thumbnail endpoint (sz=w2560 asks for a high-res version) is more reliable for hotlinking than export=view
const featureImages = [
  { url: 'https://drive.google.com/thumbnail?id=1cVz-3GXh1Sp3r3zNWF8W-sQoAlcTJfPG&sz=w2560', caption: 'Perú' },
  { url: 'https://drive.google.com/thumbnail?id=1TKcmCYOPsAnHbNnQrj6LjHpGdeWIluO3&sz=w2560', caption: 'Iceland' },
  { url: 'https://drive.google.com/thumbnail?id=1_sChJsNfKnvu_JomHmmJLohNecKk2BqR&sz=w2560', caption: 'Santa Cruz' },
];

const Home: React.FC = () => {
  // Select one image (deterministic for the session)
  const dailyImage = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * featureImages.length);
    return featureImages[randomIndex];
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    // Prevent infinite error loop
    target.onerror = null; 
    console.warn(`Failed to load image: ${target.src}. Check Google Drive permissions.`);
    target.src = "https://placehold.co/600x400/e5e5e5/a3a3a3?text=Loading+Error";
  };

  // Standardized link style
  const linkClass = "decoration-stone-300/60 underline hover:decoration-gold-500 text-charcoal hover:text-gold-500 transition-all duration-300 underline-offset-4";

  return (
    <div className="flex flex-col justify-between animate-fade-in pt-8 lg:pt-16">
      
      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row gap-12 lg:gap-20 items-start mb-8 px-6 md:px-0">
        
        {/* Left Column: Avatar & Contact */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start space-y-6 shrink-0">
          {/* Avatar Container */}
          <div className="relative w-48 md:w-full max-w-[260px] group">
             {/* Offset border effect for design sense */}
            <div className="absolute top-3 -left-3 w-full h-full border-2 border-stone-200 rounded-sm -z-10 group-hover:top-2 group-hover:-left-2 transition-all duration-500"></div>
            
            <img 
              src="https://drive.google.com/thumbnail?id=1j3DZWbPbqJ_cxUSKTuCaF0Njf86C6H2y&sz=w1000"
              alt="Gepeng Ding" 
              onError={handleImageError}
              className="relative w-full h-auto aspect-[3/4] object-cover rounded-sm shadow-md hover:shadow-lg transition-all duration-500 ease-out grayscale-[15%] hover:grayscale-0 bg-stone-200"
            />
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center space-x-6 pt-4 pl-1">
            <a 
              href="https://github.com/QMSforever" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-stone-400 hover:text-gold-500 hover:scale-110 transition-all duration-300"
              aria-label="Github"
            >
              <Github size={22} strokeWidth={1.5} />
            </a>
            <a 
              href="https://www.linkedin.com/in/gp714/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-stone-400 hover:text-gold-500 hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} strokeWidth={1.5} />
            </a>
            <a 
              href="mailto:gepengd@stanford.edu" 
              className="text-stone-400 hover:text-gold-500 hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={22} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="w-full md:w-2/3 space-y-8 md:pt-1">
          
          <div>
            <h1 className="font-sans text-sm font-bold text-academic-red uppercase tracking-[0.25em] mb-5 ml-1">
              Welcome
            </h1>
            
            <h2 className="font-helvetica text-2xl md:text-2xl leading-tight text-charcoal font-medium mb-6">
              I am Gepeng Ding (丁歌鹏), a Research Associate at <a href="https://fsi.stanford.edu/" target="_blank" rel="noopener noreferrer" className={linkClass}>
                Stanford FSI
              </a>.
            </h2>
          </div>
          
          {/* Research Intro - Helvetica font */}
          <div className="font-helvetica text-lg md:text-xl text-gray-800 leading-relaxed space-y-6 text-justify">
            <p>
              My research examines how subnational institutions and state capital shape technological innovation and entrepreneurial finance.
            </p>
            <p>
              Currently,  I study the evolving role of Chinese local government financing vehicles and their equity relationship with state-backed venture capital funds, using mixed empirical strategies and large-scale data to understand how public and private capital jointly influence firm-level innovation outcomes.
            </p>
          </div>

        </div>
      </div>

      {/* Bio Section - Full Width */}
      <div className="max-w-5xl mx-auto w-full px-6 md:px-0 mb-12">
         {/* Metadata separator - Centered */}
         <div className="flex items-center justify-center gap-3 mb-6 mt-2">
             <div className="h-px w-12 bg-stone-300"></div>
             <span className="font-sans text-[10px] font-semibold text-stone-400 uppercase tracking-widest">Based in Stanford, CA</span>
             <div className="h-px w-12 bg-stone-300"></div>
          </div>

          {/* Personal Bio - Helvetica font */}
          <div className="font-helvetica font-light text-lg md:text-xl text-gray-800 leading-relaxed space-y-6 text-justify">
             <p>
                My hometown is <a href="https://en.wikipedia.org/wiki/Lanzhou" target="_blank" rel="noopener noreferrer" className={linkClass}>Lanzhou</a>, China, where I spent my first eighteen years. Before coming to Stanford, I studied Astrophysics and Politics at UC Santa Cruz. I enjoy playing grand strategy games such as <a href="https://www.paradoxinteractive.com/games/victoria-3/about" target="_blank" rel="noopener noreferrer" className={linkClass}>Victoria 3</a>, practicing photography and mixology, and exploring unfamiliar cities with no set itinerary.
             </p>
          </div>
      </div>

      {/* Featured Single Image (Changes on Load) */}
      <div className="w-full max-w-5xl mx-auto px-6 md:px-0 mt-8 mb-8">
         <div className="relative w-full aspect-[21/9] md:aspect-[2.5/1] overflow-hidden rounded-sm bg-stone-200 group cursor-default">
            <img 
              src={dailyImage.url} 
              alt={dailyImage.caption}
              onError={handleImageError}
              className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1500ms] ease-out"
            />
            
            {/* Subtle Overlay */}
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none"></div>
            
            {/* Caption on Hover */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-150">
              <span className="font-serif text-white/90 text-sm md:text-lg italic tracking-wide drop-shadow-md bg-black/20 backdrop-blur-sm px-3 py-1 rounded-sm">
                {dailyImage.caption}
              </span>
            </div>
         </div>
         <div className="mt-3 flex justify-end">
            <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-stone-300 group-hover:text-stone-400 transition-colors">
              Featured Photography
            </span>
         </div>
      </div>
    </div>
  );
};

export default Home;