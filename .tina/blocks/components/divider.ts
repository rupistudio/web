import { Template } from 'tinacms';
import { mapOptions,options } from '../../utils';
import { fields } from '../../utils/_fields'; // @TODO: extract fields

// ZWgF2
export const divider: Template = {
  label: 'Divider',
  name: 'divider',
  ui: {
    // defaultItem: {
    //   orientation: 'horizontal',
    //   borderColor: 'gray.500',
    // },
    previewSrc: '/blocks/preview-divider.webp', // @TODO: add preview image
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
