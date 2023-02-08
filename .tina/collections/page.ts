import type { Collection } from 'tinacms';

import { fields, templates } from '../utils';

// Zw7l2
export const page: Collection['fields'] = [
  ...fields.page,
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
    templates: templates.page, // ZWgF2
  },
  ...fields.colors,
  ...fields.layout,
];
