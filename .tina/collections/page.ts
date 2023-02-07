import type { Collection, Template } from 'tinacms';
import { fields } from '../utils';

export const pages: Collection['fields'] = [
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
];
