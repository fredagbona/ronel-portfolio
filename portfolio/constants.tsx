import { Project, NavItem } from './types';

export const COLORS = {
  accent: '#007AFF', // DaVinci Blue
  teal: '#20C997', // Color Grade Teal
  background: '#FBFBFB',
  dark: '#111827',
  gray: '#6B7280',
  lightGray: '#E5E7EB',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'À Propos', href: '#about' },
  { label: 'Méthode', href: '#method' },
  { label: 'Projets', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Esthétique Cinématique',
    vibe: 'Émotionnel',
    category: 'Color Grading',
    videoUrl: 'https://www.tiktok.com/@actuotaku/video/7370754964118932742', // Resolved ZS5oXX31u
    width: 'normal',
  },
  {
    id: '2',
    title: 'Rythme & Transition',
    vibe: 'Énergique',
    category: 'Publicité',
    videoUrl: 'https://www.tiktok.com/@actuotaku/video/7575337530069929236', // Resolved ZS5oX9dLc
    width: 'normal',
  },
  {
    id: '3',
    title: 'Narration Visuelle',
    vibe: 'Narratif',
    category: 'Short Content',
    videoUrl: 'https://www.tiktok.com/@actuotaku/video/7451647210120383750', // Resolved ZS5oXHrBU
    width: 'normal',
  },
  {
    id: '4',
    title: 'Impact Dynamique',
    vibe: 'Rythmé',
    category: 'VFX Edit',
    videoUrl: 'https://www.tiktok.com/@actuotaku/video/7396366767590870278', // Resolved ZS5o4EP45
    width: 'normal',
  },
  {
    id: '5',
    title: 'Maîtrise Technique',
    vibe: 'Cinématique',
    category: 'Showreel',
    videoUrl: 'https://www.tiktok.com/@actuotaku/video/7357778296962108677', // Resolved ZS5oVPtuV
    width: 'normal',
  },
];