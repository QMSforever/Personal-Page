import React, { useEffect, useRef } from 'react';

const Blog: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scriptId = 'clstr_globe';
    
    // Cleanup function to remove script and clear container
    const cleanup = () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };

    // Initial cleanup to ensure clean slate
    cleanup();

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = scriptId;
    script.src = '//clustrmaps.com/globe.js?d=9AUECMfcf4jORXlJACSnZd_eRdXHKzuzPHKejNdCs48';
    
    // Append to the ref container
    if (containerRef.current) {
        containerRef.current.appendChild(script);
    }

    return cleanup;
  }, []);

  return (
    <div className="max-w-4xl mx-auto animate-fade-in pb-12">
      <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200/60 pb-8">
        <div>
            <h2 className="font-helvetica font-light text-4xl md:text-5xl text-charcoal mb-4">Blog</h2>
        </div>
        <div className="w-12 h-1 bg-academic-red md:mb-2"></div>
      </header>

      {/* Content temporarily blank */}
      <div className="min-h-[40vh]"></div>

      {/* Visitor Globe Section */}
      <div className="mt-auto pt-16 border-t border-stone-200/40 flex flex-col items-center justify-center">
        <div className="mb-8 font-helvetica text-[10px] uppercase tracking-[0.25em] text-stone-300">
            Global Visitors
        </div>
        
        {/* 
           Container Styling:
           - grayscale: Desaturates the globe to fit the academic/minimalist theme.
           - opacity: Slightly faded to look like it belongs on the paper texture.
        */}
        <div 
          ref={containerRef}
          id="globe-container" 
          className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] flex items-center justify-center opacity-70 hover:opacity-100 grayscale-[80%] hover:grayscale-0 transition-all duration-1000 ease-out overflow-hidden"
        >
          {/* Script injects here */}
        </div>
      </div>
    </div>
  );
};

export default Blog;