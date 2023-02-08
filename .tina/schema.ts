import { defineSchema } from 'tinacms';

import { page, service } from './collections';
import { routers } from './routers';

export const schema = defineSchema({
  collections: [
    {
      name: 'page',
      label: 'Pages',
      path: '_content/pages',
      format: 'mdx',
      ui: { router: routers.page },
      fields: page, // Zw7l2
    },
    {
      name: 'service',
      label: 'Services',
      path: '_content/services',
      format: 'mdx',
      ui: { router: routers.service },
      fields: service, // Zw7l2
    },
  ],
});
