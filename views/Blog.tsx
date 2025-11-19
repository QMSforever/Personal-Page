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
    <div className="max-w-3xl mx-auto animate-fade-in">
      <header className="mb-20 flex items-end gap-6">
        <div>
             <div className="w-12 h-1 bg-academic-red mb-8"></div>
            <h2 className="font-serif text-5xl text-charcoal mb-4">Journal</h2>
        </div>
        <p className="font-sans text-academic-red font-bold text-xs uppercase tracking-widest pb-6">
          Thoughts & Notes
        </p>
      </header>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="group py-10 border-b border-stone-200/50 hover:border-academic-red/30 transition-colors duration-500 cursor-pointer">
            <div className="flex flex-col md:flex-row gap-2 md:gap-12 items-baseline">
              <span className="font-sans text-[11px] text-academic-red font-semibold uppercase tracking-widest w-24 shrink-0">
                {post.date}
              </span>
              <div className="flex-1">
                <h3 className="font-serif text-3xl text-charcoal mb-3 group-hover:text-academic-red transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="font-serif text-stone-500 text-xl leading-relaxed mb-4 opacity-80 group-hover:opacity-100">
                  {post.excerpt}
                </p>
                <span className="font-sans text-[10px] text-academic-red uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 font-bold">
                   Read Entry &rarr;
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