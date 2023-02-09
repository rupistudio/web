import { Template } from 'tinacms';
import { mapOptions,options } from '../../utils';
import { fields } from '../../utils/_fields'; // @TODO: extract fields

// ZWgF2
export const content: Template = {
  label: 'Content',
  name: 'content',
  ui: {
    previewSrc: '/blocks/preview-content.webp', // @TODO: add preview image
  },
  fields: [
    {
      type: 'string',
      label: 'Heading',
      name: 'heading',
    },
    {
      type: 'string',
      label: 'Text',
      name: 'text',
      ui: {
        component: 'textarea',
        defaultItem: { color: 'text' },
      },
    },
    {
      type: 'string',
      label: 'Style',
      name: 'style',
      options: ['basic'].map(mapOptions),
    }
  ],
};
