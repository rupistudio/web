import { defineSchema } from 'tinacms';
import { pages } from './collections';
import { routers } from './routers';

export const schema = defineSchema({
  collections: [
    {
      name: 'post',
      label: 'Posts',
      path: 'content/posts',
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
      ui: {
        router: routers.post,
      },
    },
    {
      name: 'page',
      label: 'Pages',
      path: 'content/pages',
      fields: pages,
    },
  ],
});
