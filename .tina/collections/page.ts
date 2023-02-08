import type { Collection } from 'tinacms';

import { fields, templates } from '../utils';

// Zw7l2
export const page: Collection['fields'] = [
  {
    type: 'string',
    name: 'title',
    label: 'Page Title (SEO-Friendly 50-70chars.)',
    required: true,
  },
  {
    type: 'string',
    name: 'description',
    label: 'Page Description (SEO-Friendly 150-160chars.)',
    required: true,
    ui: {
      component: 'textarea',
    },
  },
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
    ui: { visualSelector: true },
    templates: templates.page, // ZWgF2
  },
];
