import React from 'react';
import { PhotoItem } from '../types';

const photos: PhotoItem[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1444723121867-c630b7381919?auto=format&fit=crop&w=800&q=80', title: 'Silence in Noise', aspect: 'landscape' },
  { id: '2', url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80', title: 'Urban Decay', aspect: 'portrait' },
  { id: '3', url: 'https://images.unsplash.com/photo-1470723710355-171b443ad858?auto=format&fit=crop&w=800&q=80', title: 'Morning Fog', aspect: 'portrait' },
  { id: '4', url: 'https://images.unsplash.com/photo-1466853817435-05b43fe45b39?auto=format&fit=crop&w=800&q=80', title: 'Structure', aspect: 'landscape' },
  { id: '5', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80', title: 'Portrait of A.', aspect: 'portrait' },
  { id: '6', url: 'https://images.unsplash.com/photo-1516528387618-afa90b13e000?auto=format&fit=crop&w=800&q=80', title: 'Texture study', aspect: 'portrait' },
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

      {/* Grid Layout - More robust than columns for visibility */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {photos.map((photo) => (
          <div key={photo.id} className="group cursor-zoom-in">
            {/* Image Container with explicit aspect ratio class to prevent collapse */}
            <div className={`relative overflow-hidden bg-stone-200 w-full ${photo.aspect === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
              <img 
                src={photo.url} 
                alt={photo.title}
                className="absolute inset-0 w-full h-full object-cover grayscale-[20%] hover:grayscale-0 hover:scale-[1.05] transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <span className="font-serif text-lg italic text-charcoal opacity-80 group-hover:opacity-100 transition-opacity duration-300">{photo.title}</span>
              <span className="font-sans text-[10px] text-stone-400 uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity duration-300">ISO 400</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-24 flex justify-center">
          <button className="font-sans text-xs uppercase tracking-widest text-stone-400 hover:text-gold-500 transition-colors">
            View Archive
          </button>
      </div>
    </div>
  );
};

export default Photography;