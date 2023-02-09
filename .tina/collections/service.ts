import type { Collection } from 'tinacms';

import { fields, templates } from '../utils';

// Zw7l2
export const service: Collection['fields'] = [
  ...fields.service,
  ...fields.image,
  ...fields.relations,
  ...fields.colors,
  // ...fields.seo,
  {
    type: 'object',
    name: 'sections',
    label: 'Sections',
    list: true,
    ui: { visualSelector: true },
    templates: templates.service, // ZWgF2
  },
  ...fields.layout,
];
