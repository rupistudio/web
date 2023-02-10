import { Template } from 'tinacms';
import { fields } from '../../utils/_fields';

// ZWgF2
export const coverImage: Template = {
  label: 'Cover Image',
  name: 'cover',
  ui: {
    defaultItem: {
      image: {
        src: '/uploads/assets/placeholder-sq.webp',
        alt: 'Placeholder Image',
      },
    },
    previewSrc: '/blocks/preview-section-cover.webp',
  },
  fields: fields.imageWithPosition,
};
