import { Template } from 'tinacms';
import { fields } from '../../utils/_fields';

export const coverImage: Template = {
  label: 'Cover Image',
  name: 'cover',
  ui: {
    previewSrc: '/blocks/preview-section-cover.webp',
  },
  fields: fields.image,
};
