import type { Collection } from 'tinacms';

// Zw7l2
export const seo: Collection = {
  name: 'seo',
  label: 'SEO',
  path: '__data/seo',
  format: 'json',
  ui: {
    global: true,
    defaultItem: {
      title: 'Rupi Beauty Studio',
      description: 'Please add a description for SEO purposes.',
      url: 'https://rupibeautystudio.com',
      keywords: 'eyebrows, facials, skin-care, beauty, ...',
      locale: 'en_US',
      images: [
        {
          url: '/uploads/assets/brand/rupi-new-logo.webp',
          width: 1200,
          height: 1032,
          alt: 'Rupi Beauty Studio Logo',
          type: 'image/webp',
        },
      ],
      additionalLinkTags: [
        {
          rel: 'icon',
          href: 'https://cdn.jsdelivr.net/gh/rupistudio/web@main/public/uploads/assets/brand/rupi-new-logo-md.webp',
        },
        {
          rel: 'cannonical',
          href: 'https://rupibeautystudio.com',
        },
      ],
    },
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title (SEO-Friendly 50-70chars.)',
      ui: {
        validate: (value) => {
          if (value.length > 70) {
            return `-${value.length - 70}/70`;
          }
        },
      },
    },
    {
      type: 'string',
      name: 'description',
      label: 'Description (SEO-Friendly 150-160chars.)',
      ui: {
        component: 'textarea',
        validate: (value) => {
          if (value.length > 160) {
            return `-${value.length - 160}/160`;
          }
        },
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
  ],
};
