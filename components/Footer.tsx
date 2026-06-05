import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 mt-auto bg-transparent">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-4">
        {/* Decorative line */}
        <div className="w-px h-8 bg-stone-300/50 mb-2"></div>
        
        <p className="text-[10px] font-sans text-stone-300 uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Gepeng Ding
          <span className="mx-2 text-stone-300/70" aria-hidden="true">/</span>
          <span>Powered By Codex</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
