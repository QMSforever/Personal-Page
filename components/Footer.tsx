import React from 'react';
import { Linkedin, Mail, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-16 mt-auto">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-8">
        {/* Decorative line */}
        <div className="w-px h-12 bg-stone-300/50"></div>
        
        <div className="flex space-x-8 text-stone-400">
          <a href="https://github.com/QMSforever" target="_blank" rel="noopener noreferrer" className="hover:text-academic-red transition-colors duration-500 hover:-translate-y-1 transform"><Github size={22} strokeWidth={1.5} /></a>
          <a href="https://www.linkedin.com/in/gp714/" target="_blank" rel="noopener noreferrer" className="hover:text-academic-red transition-colors duration-500 hover:-translate-y-1 transform"><Linkedin size={22} strokeWidth={1.5} /></a>
          <a href="mailto:gepengd@stanford.edu" className="hover:text-academic-red transition-colors duration-500 hover:-translate-y-1 transform"><Mail size={22} strokeWidth={1.5} /></a>
        </div>
        
        <p className="text-[10px] font-sans text-stone-300 uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Gepeng Ding
        </p>
      </div>
    </footer>
  );
};

export default Footer;