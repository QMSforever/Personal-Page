import React from 'react';
import { ResearchPaper } from '../types';
import { FileText, ArrowUpRight } from 'lucide-react';

const articles: ResearchPaper[] = [
  {
    id: '1',
    title: "Restructuring for Credit: The Political Economy of Debt Crisis in China",
    authors: "Gepeng Ding",
    conference: "Master’s Thesis at Stanford CEAS",
    year: 2025,
    abstract: "",
    link: "https://purl.stanford.edu/js084fx2027"
  }
];

const workingPapers: ResearchPaper[] = [
  {
    id: 'wp1',
    title: "China’s New VCs: Transformation of Local Government Financing Vehicles",
    authors: "with Jean Oi",
    conference: "Working Paper",
    year: 2025,
    abstract: "",
    link: ""
  }
];

const Research: React.FC = () => {
  const renderPaper = (paper: ResearchPaper) => {
    const hasLink = paper.link && paper.link.length > 0;

    return (
      <article key={paper.id} className="group relative pl-0 md:pl-8 border-l border-transparent hover:border-gold-500/30 transition-colors duration-500">
        {/* Hover indicator */}
        <div className="absolute -left-[5px] top-3 w-2 h-2 bg-gold-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block"></div>
        
        <div className="mb-3 font-helvetica text-sm uppercase tracking-widest text-academic-red font-semibold">
          {paper.year}
        </div>
        
        <h4 className="font-serif text-3xl md:text-4xl text-charcoal transition-colors duration-300 leading-tight mb-4">
          {hasLink ? (
            <a href={paper.link} target="_blank" rel="noopener noreferrer" className="flex items-baseline gap-3 group-hover:text-gold-500">
              {paper.title}
              <ArrowUpRight size={28} className="text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-1" />
            </a>
          ) : (
            <span>{paper.title}</span>
          )}
        </h4>
        
        <div className="mb-6 font-helvetica text-lg tracking-wide text-stone-500">
          {paper.conference} <span className="mx-2 text-stone-300">|</span> <span className="text-stone-600 italic">{paper.authors}</span>
        </div>
        
        {hasLink && (
          <div className="mt-6 pt-2">
             <a href={paper.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-helvetica uppercase tracking-[0.2em] text-stone-400 hover:text-gold-500 transition-colors font-bold">
                <FileText size={18} /> VIEW
             </a>
          </div>
        )}
      </article>
    );
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in pb-12">
      <header className="mb-16">
        <div className="w-12 h-1 bg-academic-red mb-8"></div>
        <h2 className="font-serif text-5xl md:text-6xl text-charcoal mb-6">Research</h2>
      </header>

      {/* Articles Section */}
      <section className="mb-24">
        <h3 className="font-serif text-4xl text-charcoal mb-12 flex items-center gap-4">
          Articles
        </h3>
        <div className="space-y-16">
          {articles.map(renderPaper)}
        </div>
      </section>

      {/* Working Papers Section */}
      <section className="mb-12">
        <h3 className="font-serif text-4xl text-charcoal mb-12">
          Working Papers
        </h3>
        <div className="space-y-16">
          {workingPapers.map(renderPaper)}
        </div>
      </section>
    </div>
  );
};

export default Research;