import type { Collection } from 'tinacms';

import { routers } from '../routers';
import { fields, templates } from '../utils';

// Zw7l2
export const service: Collection = {
  name: 'service',
  label: 'Services',
  path: '_content/services',
  format: 'mdx',
  ui: {
    router: routers.service,
    defaultItem: {
      title: 'New Service',
      description:
        "This is your services's description which can be used for SEO purposes.",
      slug: 'new-service',
    },
  },
  fields: [
    ...fields.service,
    ...fields.image,
    ...fields.colors,
    {
      type: 'object',
      name: 'sections',
      label: 'Sections',
      list: true,
      ui: { visualSelector: true },
      templates: templates.service, // ZWgF2
    },
    ...fields.layout,
  ],
};
