import type { Template } from 'tinacms';
import { fields } from '../../utils';

// ZWgF2
export const emailCta: Template = {
  label: 'CTA: Email Subscription',
  name: 'emailCta',
  ui: {
    defaultItem: {
      image: {
        src: '/uploads/people/girl-holding-money-pink-bg.webp',
      },
      cta: 'Sign up for our Mailing List',
      description:
        'Get the latest in beauty news, updates, and special offers delivered directly to your inbox. No spam, ever.',
    },
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
