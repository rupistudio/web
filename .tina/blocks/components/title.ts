import { Template } from 'tinacms';
import { mapOptions } from '../../utils/options';

export const title: Template = {
  label: 'Section Title',
  name: 'title',
  ui: {
    defaultItem: {
      title: 'Section Title',
      as: 'h3',
    },
    previewSrc: '/blocks/preview-section-title.webp',
  },
  fields: [
    {
      type: 'string',
      label: 'Section Title',
      name: 'title',
    },
    {
      type: 'string',
      label: 'Heading Size',
      name: 'as',
      options: ['h1', 'h2', 'h3', 'h4'].map(mapOptions),
    },
  ],
};
