import React from 'react';
import { PhotoItem } from '../types';

const photos: PhotoItem[] = [
  { id: '1', url: 'https://drive.google.com/thumbnail?id=1K2d4SQk92XvBniFpgBtZ0j4ROt0FJJef&sz=w2560', title: 'Portfolio', aspect: 'landscape' },
];

const Photography: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://placehold.co/600x400/e5e5e5/a3a3a3?text=Image+Not+Found";
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 animate-fade-in">
       <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200/60 pb-8">
        <div>
          <h2 className="font-helvetica font-light text-4xl md:text-5xl text-charcoal">Photography</h2>
        </div>
        <p className="font-serif text-stone-500 italic text-right max-w-md text-lg leading-relaxed">
          "To photograph is to hold one's breath, when all faculties converge to capture fleeting reality."
        </p>
      </header>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {photos.map((photo) => (
          <div key={photo.id} className="group cursor-zoom-in">
            <div className="relative overflow-hidden bg-stone-200 w-full rounded-sm shadow-sm hover:shadow-md transition-all duration-500">
              <img 
                src={photo.url} 
                alt={photo.title}
                onError={handleImageError}
                className="w-full h-auto block grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none"></div>
            </div>
            {/* Removed labels below image */}
          </div>
        ))}
      </div>
      
      <div className="mt-24 flex justify-center">
          <button className="font-helvetica text-xs uppercase tracking-widest text-stone-400 hover:text-gold-500 transition-colors">
            View Archive
          </button>
      </div>
    </div>
  );
};

export default Photography;