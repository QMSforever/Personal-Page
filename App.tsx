import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Home from './views/Home';
import Research from './views/Research';
import Photography from './views/Photography';
import Blog from './views/Blog';
import { Section } from './types';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HOME);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Scroll to top on section change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const renderContent = () => {
    switch (activeSection) {
      case Section.HOME:
        return <Home />;
      case Section.RESEARCH:
        return <Research />;
      case Section.PHOTOGRAPHY:
        return <Photography />;
      case Section.BLOG:
        return <Blog />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-paper text-charcoal font-serif selection:bg-gold-500/30 selection:text-charcoal overflow-x-hidden">
      
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 w-full bg-paper/90 backdrop-blur-sm z-50 px-6 py-4 flex justify-between items-center border-b border-stone-200/50">
         <span 
           className="font-arial-nova text-lg cursor-pointer text-charcoal font-bold"
           onClick={() => { setActiveSection(Section.HOME); setIsMobileMenuOpen(false); }}
         >
           Gepeng Ding
         </span>
         <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-charcoal/80 hover:text-charcoal">
           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
         </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-paper z-40 pt-32 px-12 lg:hidden animate-fade-in">
          <nav className="flex flex-col space-y-8 text-left">
             {Object.values(Section).map((sec) => (
               <button 
                 key={sec}
                 onClick={() => { setActiveSection(sec); setIsMobileMenuOpen(false); }}
                 className="font-arial-nova text-4xl text-stone-400 hover:text-gold-500 transition-colors"
               >
                 {sec}
               </button>
             ))}
          </nav>
        </div>
      )}

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-56 shrink-0 h-screen sticky top-0 border-r border-stone-300/20">
          <Sidebar activeSection={activeSection} onNavigate={setActiveSection} />
        </div>

        {/* Main Content Area */}
        <main className="flex-1 w-full pt-24 lg:pt-0 min-h-screen transition-opacity duration-500 ease-in-out">
          <div className="max-w-4xl mx-auto px-6 py-12 lg:px-20 lg:py-24">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;