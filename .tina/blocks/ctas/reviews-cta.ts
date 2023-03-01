import type { Template } from 'tinacms';
import { fields } from '../../utils';

// ZWgF2
export const reviewsCta: Template = {
  label: 'CTA: Reviews',
  name: 'reviewsCta',
  ui: {
    defaultItem: {
      image: {
        src: '/uploads/assets/rupi-google-review.jpeg',
      },
      cta: 'Share your experience with the world.',
      description:
        'We love to hear about your experience, and we know others do too. Leave us a review and let us know how we did. We appreciate your feedback!',
    },
    previewSrc: '/blocks/preview-reviews-cta.webp', // @RTODO: Add preview
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
      ui: {
        component: 'textarea',
      },
    },
  ],
};
