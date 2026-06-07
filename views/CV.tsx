import React from 'react';
import { Download } from 'lucide-react';
import { assetPath, cv } from '../data/site';

const CV: React.FC = () => {
  const cvPdfUrl = cv.pdfPath ? assetPath(cv.pdfPath) : '';

  return (
    <div className="max-w-4xl mx-auto animate-fade-in pb-16">
      <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200/60 pb-8">
        <div>
          <h2 className="font-helvetica font-light text-4xl md:text-5xl text-charcoal mb-2">Curriculum Vitae</h2>
          <p className="font-helvetica text-sm text-stone-500">Last updated: {cv.lastUpdated}</p>
        </div>
        {cvPdfUrl && (
          <a 
            href={cvPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 self-start font-helvetica text-xs font-bold text-academic-red uppercase tracking-widest hover:text-gold-500 transition-colors border border-academic-red/30 hover:border-gold-500/50 px-4 py-2 rounded-sm"
          >
            <Download size={14} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
            Download PDF
          </a>
        )}
      </header>

      <div className="max-w-3xl mx-auto space-y-12">
        {cv.sections.map((section) => (
          <section key={section.title}>
            <h3 className="font-helvetica font-medium text-sm md:text-base uppercase tracking-[0.2em] text-stone-600 mb-5 border-b border-stone-200 pb-3">
              {section.title}
            </h3>
            <ul className="space-y-3 font-helvetica text-lg text-gray-800 leading-relaxed">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default CV;
