import React, { useState, useEffect } from 'react';
import { Section } from '../types';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: Section.RESEARCH, label: 'Research' },
    { id: Section.PHOTOGRAPHY, label: 'Photography' },
    { id: Section.BLOG, label: 'Blog' },
  ];

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out border-b border-white/10
          ${isScrolled 
            ? 'bg-academic-red/95 backdrop-blur-md shadow-lg py-4' 
            : 'bg-academic-red/90 backdrop-blur-sm py-6'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Name */}
          <div 
            className="cursor-pointer z-50 group" 
            onClick={() => onNavigate(Section.HOME)}
          >
            <h1 className="font-arial-nova text-2xl md:text-3xl text-white font-bold tracking-wide whitespace-nowrap group-hover:text-gold-500 transition-colors duration-300">
              Gepeng Ding
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 lg:gap-16">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`font-arial-nova text-[15px] uppercase tracking-[0.15em] transition-all duration-300 relative group
                  ${activeSection === item.id 
                    ? 'text-white font-semibold' 
                    : 'text-white/70 hover:text-gold-500'
                  }
                `}
              >
                {item.label}
                {/* Active indicator dot */}
                <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold-500 transition-all duration-300 
                  ${activeSection === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} 
                />
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 text-white/80 hover:text-white transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Full Screen Overlay */}
      <div 
        className={`fixed inset-0 bg-academic-red/98 backdrop-blur-xl z-40 transition-all duration-500 md:hidden flex flex-col justify-center items-center space-y-10
          ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}
        `}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              onNavigate(item.id);
              setIsMobileMenuOpen(false);
            }}
            className="font-arial-nova text-4xl text-white/90 hover:text-gold-500 transition-colors font-light"
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default Navbar;