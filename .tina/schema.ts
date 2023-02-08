import { defineSchema } from 'tinacms';

import { page } from './collections';
import { routers } from './routers';

export const schema = defineSchema({
  collections: [
    {
      name: 'post',
      label: 'Posts',
      path: '_content/posts',
      format: 'mdx',
      fields: [
        {
          type: 'string',
          name: 'title',
          label: 'Title',
          isTitle: true,
          required: true,
        },
        {
          type: 'rich-text',
          name: 'body',
          label: 'Body',
          isBody: true,
        },
      ],
      ui: { router: routers.post },
    },
    {
      name: 'page',
      label: 'Pages',
      path: '_content/pages',
      format: 'mdx',
      ui: { router: routers.page },
      fields: page, // Zw7l2
    },
  ],
});