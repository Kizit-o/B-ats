import type { NewsArticle } from '../types';

import gptImage     from '../assets/GPT.jpg';
import visionImage  from '../assets/vision.jpg';
import quantumImage from '../assets/quantum.jpg';

export const articles: NewsArticle[] = [
  {
    id:      'n1',
    date:    'January 14, 2026',
    author:  'Sarah Chen',
    title:   'OpenAI Releases GPT-6 With Real-Time Multimodal Reasoning',
    excerpt: 'OpenAI has unveiled GPT-6, its most capable model to date, featuring real-time multimodal reasoning across text, image, audio, and video — achieving human-expert level performance on a broad range of professional benchmarks.',
    image:   gptImage,
  },
  {
    id:      'n2',
    date:    'February 3, 2026',
    author:  'Marcus Webb',
    title:   'Apple Vision Pro 2 Ships With Neural Mesh Display Technology',
    excerpt: 'Apple\'s second-generation Vision Pro headset introduces Neural Mesh Display, a breakthrough panel technology that renders visuals indistinguishable from reality, while cutting the device weight by nearly 40 percent compared to its predecessor.',
    image:   visionImage,
  },
  {
    id:      'n3',
    date:    'March 22, 2026',
    author:  'Lena Hoffmann',
    title:   'Quantum Computing Hits 10,000-Qubit Milestone, Threatening Current Encryption Standards',
    excerpt: 'IBM and Google jointly announced a 10,000-stable-qubit processor this week, a landmark that cryptographers warn could render today\'s RSA and ECC encryption obsolete within two years, accelerating the global push toward post-quantum cryptography standards.',
    image:   quantumImage,
  },
];