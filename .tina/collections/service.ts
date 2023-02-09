import type { Collection } from 'tinacms';

import { fields, templates } from '../utils';

// Zw7l2
export const service: Collection['fields'] = [
  ...fields.service,
  ...fields.image,
  ...fields.relations,
  ...fields.colors,
  {
    type: 'object',
    name: 'seo',
    label: 'SEO',
    fields: [...fields.page, ...fields.image],
  },
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
