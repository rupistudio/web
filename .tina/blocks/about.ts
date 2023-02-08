import type { Template } from 'tinacms';

import { fields } from '../utils';

// ZWgF2
export const about: Template = {
  label: 'About Section',
  name: 'about',
  ui: {
    previewSrc: '/blocks/preview-about.webp',
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
    },
    {
      type: 'string',
      name: 'heading',
      label: 'Heading',
    },
    {
      type: 'string',
      name: 'subtitle',
      label: 'Subtitle',
    },
    {
      type: 'string',
      name: 'caption',
      label: 'Caption',
    },
    {
      type: 'string',
      name: 'description',
      label: 'Description',
      ui: { component: 'textarea' },
    },
    ...fields?.image,
    {
      type: 'boolean',
      name: 'showLicenses',
      label: 'Show Licenses',
    },
  ],
};
