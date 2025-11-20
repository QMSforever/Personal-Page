import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Research from './views/Research';
import Photography from './views/Photography';
import Blog from './views/Blog';
import CV from './views/CV';
import { Section } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HOME);
  
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
      case Section.CV:
        return <CV />;
      case Section.PHOTOGRAPHY:
        return <Photography />;
      case Section.BLOG:
        return <Blog />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-paper text-charcoal font-serif selection:bg-academic-red/20 selection:text-academic-red flex flex-col">
      
      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />

      {/* Main Content Area - Padding top added for fixed header */}
      <main className="flex-1 w-full pt-32 lg:pt-40 transition-opacity duration-500 ease-in-out">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {renderContent()}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;