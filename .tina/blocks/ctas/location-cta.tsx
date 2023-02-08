import type { Template } from 'tinacms';

// ZWgF2
export const locationCta: Template = {
  label: 'CTA: Visit Location',
  name: 'locationCta',
  ui: {
    previewSrc: '/blocks/preview-location-cta.webp',
  },
  fields: [
    {
      type: 'string',
      name: 'cta',
      label: 'CTA: Call-to-action text',
    },
    {
      type: 'string',
      name: 'address',
      label: 'Full Mailing Address',
    },
  ],
};
