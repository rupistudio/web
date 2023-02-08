import type { Template } from 'tinacms';

import { fields } from '../utils';

// ZWgF2
export const hero: Template = {
  label: 'Hero Section',
  name: 'hero',
  ui: {
    previewSrc: '/blocks/preview-hero-composite.webp',
  },
  fields: [
    {
      type: 'string',
      name: 'intro',
      label: 'Intro Text',
    },
    {
      type: 'string',
      name: 'heading',
      label: 'Heading',
    },
    ...fields?.image,
    {
      type: 'string',
      label: 'CTA: Call-to-Action text',
      name: 'cta',
    },
    {
      type: 'string',
      label: 'Phone Number (000) 000-0000',
      name: 'phone',
    },
  ],
};
