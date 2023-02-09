import type { Template } from 'tinacms';
import { fields } from '../../utils';

// ZWgF2
export const emailCta: Template = {
  label: 'CTA: Email Subscription',
  name: 'emailCta',
  ui: {
    previewSrc: '/blocks/preview-email-cta.webp',
  },
  fields: [
    ...fields.image,
    {
      type: 'string',
      name: 'cta',
      label: 'CTA: Call-to-action text',
    },
    {
      type: 'string',
      name: 'description',
      label: 'Description',
    },
  ],
};
