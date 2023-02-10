import { Template } from 'tinacms';
import { mapOptions, options } from '../../utils';

const quotes = [
  "Beauty is not just skin deep. It's a reflection of who you are on the inside.",
  "'Beauty is how you feel inside, and it reflects in your eyes.' - Sophia Loren",
  "'Beauty is not just a number. It's not just a size. It's not just a color. It's a personality, a strength, a story.' - Unknown",
];

function randomeNumberBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ZWgF2
export const content: Template = {
  label: 'Content',
  name: 'content',
  ui: {
    defaultItem: {
      text: quotes[randomeNumberBetween(0, quotes.length - 1)], // selects a new quote on each build
      style: 'basic',
    },
    previewSrc: '/blocks/preview-content.webp',
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
      },
    },
    {
      type: 'string',
      label: 'Style',
      name: 'style',
      options: ['basic', 'benefits', 'disclaimer'].map(mapOptions),
    },
  ],
};
