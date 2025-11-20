import React from 'react';
import { Section } from '../types';
import { Linkedin, Mail, Github } from 'lucide-react';

interface SidebarProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onNavigate }) => {
  const navItems = [
    { id: Section.RESEARCH, label: 'Research' },
    { id: Section.CV, label: 'CV' },
    { id: Section.PHOTOGRAPHY, label: 'Photography' },
    { id: Section.BLOG, label: 'Blog' },
  ];

  return (
    <aside className="h-full flex flex-col justify-between py-16 px-6 relative">
      {/* Header / Name */}
      <div className="cursor-pointer group" onClick={() => onNavigate(Section.HOME)}>
        <div>
          <h1 className="font-arial-nova text-2xl md:text-3xl text-charcoal font-bold tracking-wide whitespace-nowrap hover:text-gold-500 transition-colors duration-300">
            Gepeng Ding
          </h1>
        </div>
      </div>

      {/* Navigation - Arial Nova, Larger */}
      <nav className="flex flex-col space-y-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`text-left font-arial-nova text-2xl tracking-wide transition-all duration-300 ease-out group flex items-center
              ${activeSection === item.id ? 'text-charcoal font-semibold' : 'text-stone-600 hover:text-gold-500'}
            `}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Footer / Socials */}
      <div className="space-y-8">
        <div className="flex space-x-4 text-stone-400">
          <a href="https://github.com/QMSforever" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors duration-300"><Github size={20} strokeWidth={1.5} /></a>
          <a href="https://www.linkedin.com/in/gp714/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors duration-300"><Linkedin size={20} strokeWidth={1.5} /></a>
          <a href="mailto:gepengd@stanford.edu" className="hover:text-gold-500 transition-colors duration-300"><Mail size={20} strokeWidth={1.5} /></a>
        </div>
        
        <p className="text-[9px] font-sans text-stone-300 uppercase tracking-widest">
          © {new Date().getFullYear()}
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;