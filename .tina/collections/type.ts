import type { Collection } from 'tinacms';

import { fields, templates } from '../utils';

// Zw7l2
export const type: Collection = {
  name: 'type',
  label: 'Service Options',
  path: '_content/types',
  format: 'mdx',
  ui: {
    global: true,
    defaultItem: {
      title: 'New Service Option',
      description:
        "This is your service option's description which can be used for SEO purposes.",
      slug: 'service:service-option',
    },
  },
  fields: [
    ...fields.type,
    ...fields.image,
    {
      type: 'string',
      name: 'price',
      label: 'Price, e.g. 100, 1.99, 999.99',
    },
    {
      type: 'string',
      name: 'duration',
      label: 'Duration, e.g. 45min, 1hr',
    },
    {
      type: 'object',
      name: 'advanced_pricing',
      label: 'Advanced Pricing',
      list: true,
      fields: [
        {
          type: 'string',
          name: 'unit',
          label: 'Unit, e.g. 1 hour, 1 session',
          isTitle: true,
          required: true,
        },
        {
          type: 'string',
          name: 'price',
          label: 'Price, e.g. 100, 1.99, 999.99',
        },
      ],
    },
  ],
};
