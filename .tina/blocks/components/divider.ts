import { Template } from 'tinacms';
import { mapOptions, options } from '../../utils';

// ZWgF2
export const divider: Template = {
  label: 'Divider',
  name: 'divider',
  ui: {
    previewSrc: '/blocks/preview-divider.webp',
    defaultItem: {
      orientation: 'horizontal',
      borderColor: 'gray.300',
    },
  },
  fields: [
    {
      type: 'string',
      name: 'orientation',
      label: 'Direction',
      options: ['horizontal', 'vertical'].map(mapOptions),
    },
    {
      type: 'string',
      name: 'borderColor',
      label: 'Line Color',
      options: options.colors,
    },
  ],
};
