import React from 'react';
import { PhotoItem } from '../types';

const photos: PhotoItem[] = [
  { id: '1', url: 'https://picsum.photos/600/800?random=1', title: 'Silence in Noise', aspect: 'portrait' },
  { id: '2', url: 'https://picsum.photos/800/600?random=2', title: 'Urban Decay', aspect: 'landscape' },
  { id: '3', url: 'https://picsum.photos/600/800?random=3', title: 'Morning Fog', aspect: 'portrait' },
  { id: '4', url: 'https://picsum.photos/800/600?random=4', title: 'Structure', aspect: 'landscape' },
  { id: '5', url: 'https://picsum.photos/600/800?random=5', title: 'Portrait of A.', aspect: 'portrait' },
  { id: '6', url: 'https://picsum.photos/600/600?random=6', title: 'Texture study', aspect: 'portrait' },
];

const Photography: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 animate-fade-in">
       <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="font-serif text-4xl text-charcoal mb-2">Photography</h2>
          <p className="font-sans text-xs text-stone-400 uppercase tracking-widest">Analog & Digital / 35mm</p>
        </div>
        <p className="font-serif text-stone-500 italic text-right max-w-xs">
          "To photograph is to hold one's breath, when all faculties converge to capture fleeting reality."
        </p>
      </header>

      <div className="columns-1 md:columns-2 gap-8 space-y-8">
        {photos.map((photo) => (
          <div key={photo.id} className="break-inside-avoid group cursor-zoom-in">
            <div className="relative overflow-hidden bg-stone-200">
              <img 
                src={photo.url} 
                alt={photo.title}
                className="w-full h-auto grayscale-[20%] hover:grayscale-0 hover:scale-[1.02] transition-all duration-700 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
            </div>
            <div className="mt-3 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
              <span className="font-serif text-lg italic text-charcoal">{photo.title}</span>
              <span className="font-sans text-[10px] text-stone-400 uppercase tracking-wider">ISO 400</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-24 flex justify-center">
          <button className="font-sans text-xs uppercase tracking-widest text-stone-400 hover:text-stone-800 transition-colors">
            View Archive
          </button>
      </div>
    </div>
  );
};

export default Photography;