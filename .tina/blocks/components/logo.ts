import { Template } from 'tinacms';
import { fields } from '../../utils/_fields';

// ZWgF2
export const logo: Template = {
  label: 'Full Logo',
  name: 'logo',
  ui: {
    defaultItem: {
      src: '/uploads/assets/brand/rupi-new-logo-optimized.webp',
      alt: 'Rupi Beauty Studio Logo',
    },
    previewSrc: '/blocks/preview-full-logo.webp',
  },
  fields: fields.image,
};
