import React from 'react';
import { BlogPost } from '../types';

const posts: BlogPost[] = [
  {
    id: '1',
    title: "On the quiet strength of gentle interfaces",
    date: "Oct 12, 2023",
    excerpt: "Why we are gravitating back towards textures, grain, and paper-like qualities in a high-resolution world.",
    readTime: "4 min read"
  },
  {
    id: '2',
    title: "Academic writing vs. Thinking",
    date: "Sep 28, 2023",
    excerpt: "Navigating the rigid structures of publication while maintaining the fluidity of genuine inquiry.",
    readTime: "6 min read"
  },
  {
    id: '3',
    title: "Kyoto Diaries: Visual Notes",
    date: "Aug 15, 2023",
    excerpt: "A collection of observations on light, shadow, and architectural silence from my recent sabbatical.",
    readTime: "3 min read"
  },
  {
    id: '4',
    title: "Digital Gardens",
    date: "Jul 02, 2023",
    excerpt: "Treating personal websites not as billboards, but as evolving ecosystems of thought.",
    readTime: "5 min read"
  }
];

const Blog: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in pb-12">
      <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200/60 pb-8">
        <div>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Journal</h2>
             <p className="font-sans text-stone-400 text-sm uppercase tracking-widest">
              Thoughts & Notes
            </p>
        </div>
        <div className="w-12 h-1 bg-academic-red md:mb-2"></div>
      </header>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="group py-10 border-b border-stone-200/40 hover:border-gold-500/30 transition-colors duration-500 cursor-pointer">
            <div className="flex flex-col md:flex-row gap-3 md:gap-12 items-baseline">
              <span className="font-sans text-xs text-academic-red font-semibold uppercase tracking-widest w-28 shrink-0 pt-1">
                {post.date}
              </span>
              <div className="flex-1">
                <h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-3 group-hover:text-gold-500 transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>
                <p className="font-serif text-stone-500 text-lg md:text-xl leading-relaxed mb-5 opacity-90 group-hover:opacity-100 max-w-2xl">
                  {post.excerpt}
                </p>
                <span className="font-sans text-[11px] text-gold-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 font-bold flex items-center gap-2">
                   Read Entry <span className="text-lg leading-none">&rarr;</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;