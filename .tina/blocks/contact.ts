import type { Template } from 'tinacms';

import { fields } from '../utils';

// ZWgF2
export const contact: Template = {
  label: 'Contact Section',
  name: 'contact',
  ui: {
    previewSrc: '/blocks/preview-contact.webp',
  },
  fields: [
    {
      type: 'string',
      label: 'Street Address',
      name: 'address',
    },
    {
      type: 'string',
      label: 'City, State, Zip',
      name: 'locality',
    },
    {
      type: 'string',
      label: 'Phone Number',
      name: 'phoneNumber',
    },
  ],
};
