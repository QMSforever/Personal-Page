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
       <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="font-serif text-4xl text-charcoal mb-2">Photography</h2>
          <p className="font-helvetica text-xs text-stone-400 uppercase tracking-widest">Analog & Digital / 35mm</p>
        </div>
        <p className="font-helvetica text-stone-500 italic text-right max-w-xs">
          "To photograph is to hold one's breath, when all faculties converge to capture fleeting reality."
        </p>
      </header>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {photos.map((photo) => (
          <div key={photo.id} className="group cursor-zoom-in">
            {/* 
                Removed forced aspect ratio classes (aspect-[3/4]).
                Changed img to h-auto to respect intrinsic dimensions.
            */}
            <div className="relative overflow-hidden bg-stone-200 w-full rounded-sm">
              <img 
                src={photo.url} 
                alt={photo.title}
                onError={handleImageError}
                className="w-full h-auto block grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none"></div>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <span className="font-serif text-lg italic text-charcoal opacity-80 group-hover:opacity-100 transition-opacity duration-300">{photo.title}</span>
              <span className="font-helvetica text-[10px] text-stone-400 uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity duration-300">ISO 400</span>
            </div>
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