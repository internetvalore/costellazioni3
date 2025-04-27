// Define common types and interfaces for the application

export interface Meta {
  title: string;
  description: string;
  keywords?: string;
}

export interface SocialMedia {
  platform: string;
  url: string;
  icon?: string;
}

export interface MenuItem {
  label: string;
  path: string;
  children?: MenuItem[];
}