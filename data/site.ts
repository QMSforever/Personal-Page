import { PhotoItem, ResearchPaper } from '../types';

export const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

export const profile = {
  name: 'Gepeng Ding',
  chineseName: '丁歌鹏',
  email: 'gepengd@stanford.edu',
  location: 'Stanford, CA',
  image: assetPath('images/profile.jpg'),
  github: 'https://github.com/QMSforever',
  linkedin: 'https://www.linkedin.com/in/gp714/',
};

export const featureImages = [
  { url: assetPath('images/featured-peru.jpg'), caption: 'Peru' },
  { url: assetPath('images/featured-iceland.jpg'), caption: 'Iceland' },
  { url: assetPath('images/featured-santa-cruz.jpg'), caption: 'Santa Cruz' },
];

export const photos: PhotoItem[] = [
  {
    id: '1',
    url: assetPath('images/photography-portfolio.jpg'),
    title: 'Selected Portfolio',
    aspect: 'portrait',
  },
];

export const articles: ResearchPaper[] = [
  {
    id: '1',
    title: 'Restructuring for Credit: The Political Economy of Debt Crisis in China',
    authors: 'Gepeng Ding',
    conference: "Master's Thesis at Stanford CEAS",
    year: 2025,
    abstract: '',
    link: 'https://purl.stanford.edu/js084fx2027',
  },
];

export const workingPapers: ResearchPaper[] = [
  {
    id: 'wp1',
    title: "China's New VCs: Transformation of Local Government Financing Vehicles",
    authors: 'with Jean Oi',
    conference: 'Working Paper',
    year: 2025,
    abstract: '',
    link: '',
  },
];

export const cv = {
  lastUpdated: 'June 2026',
  pdfPath: '',
  sections: [
    {
      title: 'Current Position',
      items: ['Research Associate, Stanford FSI'],
    },
    {
      title: 'Research Areas',
      items: [
        'Political Economy of Development',
        'Entrepreneurial finance, innovation, and Chinese political economy',
      ],
    },
    {
      title: 'Education',
      items: [
        'Stanford University, East Asian Studies (2025)',
        'University of California, Santa Cruz, Astrophysics and Politics (2022)',
      ],
    },
  ],
};
