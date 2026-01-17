export interface Project {
  id: string;
  title: string;
  vibe: string;
  category: string;
  thumbnail?: string;
  videoUrl: string;
  width: 'normal' | 'wide';
}

export interface NavItem {
  label: string;
  href: string;
}