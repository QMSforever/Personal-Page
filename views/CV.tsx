import React from 'react';
import { Download } from 'lucide-react';

const CV: React.FC = () => {
  // 1. Upload your CV PDF to Google Drive
  // 2. Share it as "Anyone with the link can view"
  // 3. Copy the link ID (e.g., 1A2B3C...) and put it in the URL below like: https://drive.google.com/file/d/[ID]/preview
  // Currently using a placeholder.
  const cvUrl = "https://drive.google.com/file/d/1a2b3c-PLACEHOLDER-ID/preview"; 

  return (
    <div className="max-w-5xl mx-auto animate-fade-in h-[calc(100vh-240px)] flex flex-col">
      <header className="mb-8 flex items-end justify-between">
        <div>
            <h2 className="font-helvetica font-light text-4xl md:text-5xl text-charcoal mb-2">Curriculum Vitae</h2>
        </div>
        <a 
            href={cvUrl.replace('/preview', '/view')} // Converts preview link to view/download link for the button
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 font-helvetica text-xs font-bold text-academic-red uppercase tracking-widest hover:text-gold-500 transition-colors border border-academic-red/30 hover:border-gold-500/50 px-4 py-2 rounded-sm"
        >
            <Download size={14} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
            Download PDF
        </a>
      </header>

      <div className="flex-1 w-full bg-stone-200/50 border border-stone-200 rounded-sm shadow-inner overflow-hidden relative">
        <iframe 
            src={cvUrl} 
            className="absolute inset-0 w-full h-full" 
            title="Gepeng Ding CV"
            loading="lazy"
        >
            <p className="p-10 text-center text-stone-500 font-helvetica">
                Your browser does not support PDFs. 
                <a href={cvUrl} className="text-academic-red underline">Download the PDF</a> to view it.
            </p>
        </iframe>
      </div>
      
      <p className="mt-4 text-center font-helvetica text-[10px] text-stone-400 uppercase tracking-widest">
        Last updated: {new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}
      </p>
    </div>
  );
};

export default CV;