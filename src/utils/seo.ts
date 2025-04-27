import { Meta } from '../types';

/**
 * Default SEO metadata for the application
 */
export const DEFAULT_META: Meta = {
  title: 'Sistema Costellazioni Valore | Internet Valore',
  description: 'L\'hub informativo per le soluzioni digitali innovative di Internet Valore srl.',
  keywords: 'sistema costellazioni, internet valore, soluzioni digitali',
};

/**
 * Combines provided meta with default meta values
 */
export const createMeta = (meta: Partial<Meta>): Meta => {
  return {
    ...DEFAULT_META,
    ...meta,
    // Ensure title has a consistent format
    title: meta.title 
      ? `${meta.title} | Sistema Costellazioni Valore` 
      : DEFAULT_META.title,
  };
};