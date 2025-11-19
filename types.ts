export enum Section {
  HOME = 'Home',
  RESEARCH = 'Research',
  PHOTOGRAPHY = 'Photography',
  BLOG = 'Blog',
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string;
  conference: string;
  year: number;
  abstract: string;
  link?: string;
}

export interface PhotoItem {
  id: string;
  url: string;
  title: string;
  aspect: 'portrait' | 'landscape';
}