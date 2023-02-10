import type { Collection } from 'tinacms';

import { routers } from '../routers';
import { fields, templates } from '../utils';

export const page: Collection = {
  name: 'page',
  label: 'Pages',
  path: '_content/pages',
  format: 'mdx',
  ui: {
    router: routers.page,
    defaultItem: {
      title: 'New Page',
      description:
        "This is your page's description which can be used for SEO purposes.",
    },
  },
  fields: [
    ...fields.page,
    ...fields.image,
    ...fields.colors,
    {
      type: 'object',
      name: 'sections',
      label: 'Sections',
      list: true,
      ui: { visualSelector: true },
      templates: [...templates.page, ...templates.service], // ZWgF2
    },
    ...fields.layout,
  ],
};
