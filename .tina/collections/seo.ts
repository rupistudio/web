import type { Collection } from 'tinacms';

// Zw7l2
export const seo: Collection['fields'] = [
  {
    type: 'string',
    name: 'title',
    label: 'Title (SEO-Friendly 50-70chars.)',
  },
  {
    type: 'string',
    name: 'description',
    label: 'Description (SEO-Friendly 150-160chars.)',
    ui: {
      component: 'textarea',
    },
  },
  {
    type: 'string',
    name: 'url',
    label: 'URL',
  },
  {
    type: 'string',
    name: 'keywords',
    label: 'Keywords (Anywhere between 5-10 keywords of the most relevant)',
    ui: {
      component: 'textarea',
    },
  },
  {
    type: 'string',
    name: 'locale',
    label: 'Locale (en_US)',
  },
  {
    type: 'object',
    name: 'images',
    label:
      'Images (The image shown when your website is shared on social media)',
    list: true,
    ui: { defaultItem: {} },
    fields: [
      {
        type: 'image',
        name: 'url',
        label: 'Image',
      },
      {
        type: 'number',
        name: 'width',
        label: 'Width',
      },
      {
        type: 'number',
        name: 'height',
        label: 'Height',
      },
      {
        type: 'string',
        name: 'alt',
        label: 'Alt Text',
      },
      {
        type: 'string',
        name: 'type',
        label: 'image/jpeg, image/png, image/gif, image/svg+xml, image/webp',
        options: ['jpeg', 'png', 'gif', 'svg+xml', 'webp'].map((type) => ({
          label: type,
          value: `image/${type}`,
          key: type,
        })),
      },
    ],
  },
  {
    type: 'object',
    name: 'additionalLinkTags',
    label:
      'Additional Links (That help search engines better understand your website)',
    list: true,
    fields: [
      {
        type: 'string',
        name: 'rel',
        label: 'Rel',
      },
      {
        type: 'string',
        name: 'href',
        label: 'URL',
      },
    ],
  },
];
