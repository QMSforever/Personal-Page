import React from 'react';
import { ResearchPaper } from '../types';
import { FileText, ArrowUpRight } from 'lucide-react';

const papers: ResearchPaper[] = [
  {
    id: '1',
    title: "Temporal Dynamics in Human-AI Collaboration",
    authors: "G. Ding, J. Doe, A. Smith",
    conference: "CHI 2024 (Honorable Mention)",
    year: 2024,
    abstract: "An investigation into how latency affects trust perception in collaborative generative AI interfaces, proposing a new framework for 'waiting' design patterns.",
    link: "#"
  },
  {
    id: '2',
    title: "Minimalism as a Cognitive Load Buffer",
    authors: "G. Ding, K. Liu",
    conference: "Journal of Cognitive Engineering",
    year: 2023,
    abstract: "Exploring the correlation between negative space in user interfaces and information retention rates among diverse user groups.",
    link: "#"
  },
  {
    id: '3',
    title: "The Aesthetics of Data: Visualization Beyond Utility",
    authors: "G. Ding",
    conference: "IEEE VIS 2023",
    year: 2023,
    abstract: "A critique of purely functional data visualization, arguing for aesthetic engagement as a primary driver of insight discovery.",
    link: "#"
  }
];

const Research: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <header className="mb-20">
        <div className="w-12 h-1 bg-academic-red mb-8"></div>
        <h2 className="font-serif text-5xl text-charcoal mb-6">Research</h2>
        <p className="font-sans text-stone-500 font-light leading-relaxed text-lg max-w-2xl">
          My work focuses on <span className="text-academic-red font-medium">Human-Computer Interaction</span> and Cognitive Science. 
          I investigate how aesthetic choices in interface design influence cognitive load and emotional trust.
        </p>
      </header>

      <div className="space-y-20">
        {papers.map((paper) => (
          <article key={paper.id} className="group relative pl-0 md:pl-8 border-l border-transparent hover:border-academic-red/40 transition-colors duration-500">
            <div className="absolute -left-[5px] top-2 w-2 h-2 bg-academic-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block"></div>
            
            <div className="mb-2 font-sans text-xs uppercase tracking-widest text-academic-red font-semibold">
              {paper.year}
            </div>
            
            <h3 className="font-serif text-3xl text-charcoal group-hover:text-academic-red transition-colors duration-300">
              <a href={paper.link} className="flex items-baseline gap-3">
                {paper.title}
                <ArrowUpRight size={20} className="text-academic-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-1" />
              </a>
            </h3>
            
            <div className="mt-3 mb-5 font-sans text-xs tracking-wide text-stone-400">
              {paper.conference} <span className="mx-2 text-stone-300">|</span> <span className="text-stone-500 italic">{paper.authors}</span>
            </div>
            
            <p className="font-serif text-stone-500 leading-8 text-lg opacity-90 max-w-2xl">
              {paper.abstract}
            </p>
            
            <div className="mt-6 pt-2">
               <button className="flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.2em] text-stone-400 hover:text-academic-red transition-colors">
                  <FileText size={14} /> Abstract PDF
               </button>
            </div>
          </article>
        ))}
      </div>
      
      <div className="mt-32 pt-12 border-t border-stone-200/60 text-center">
        <p className="font-serif text-stone-400 italic text-lg">
          View full bibliography on <a href="#" className="text-academic-red underline decoration-academic-red/30 hover:decoration-academic-red underline-offset-4 transition-all">Google Scholar</a>.
        </p>
      </div>
    </div>
  );
};

export default Research;