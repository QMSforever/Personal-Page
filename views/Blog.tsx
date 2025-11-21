import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in pb-12">
      <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200/60 pb-8">
        <div>
            <h2 className="font-helvetica font-light text-4xl md:text-5xl text-charcoal mb-4">Blog</h2>
        </div>
        <div className="w-12 h-1 bg-academic-red md:mb-2"></div>
      </header>

      {/* Content temporarily blank */}
      <div className="min-h-[40vh]"></div>
    </div>
  );
};

export default Blog;