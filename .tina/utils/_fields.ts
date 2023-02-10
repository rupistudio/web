import type { Collection,Template } from 'tinacms';
import { mapOptions,options } from './options';

// Zw7l2
export const fields: Record<string, Template['fields']> = {
  page: [
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
  ],
  service: [
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
      type: 'string',
      name: 'slug',
      label:
        'Service Slug (must be all lowercase, with no spaces, shown in browser URL)',
      required: true,
    },
  ],
  type: [
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
      type: 'string',
      name: 'slug',
      label: 'Type Slug (must be all lowercase, with no spaces)',
      required: true,
    },
  ],
  image: [
    {
      type: 'object',
      name: 'image',
      label: 'Update Image',
      ui: {
        defaultItem: {
          src: '/uploads/assets/placeholder-sq.webp',
          alt: 'Placeholder Image',
          position: 'center center',
        },
      },
      fields: [
        {
          type: 'image',
          name: 'src',
          label: 'Image',
        },
        {
          type: 'string',
          name: 'alt',
          label: 'Alt Text (Used by Screen Readers)',
        },
        {
          type: 'string',
          name: 'caption',
          label: 'Caption (Text that appears below the image)',
        },
        {
          type: 'string',
          name: 'attr',
          label: 'Attribution',
        },
        // {
        //   type: 'string',
        //   name: 'position',
        //   label: 'Position',
        //   options: options.position,
        // },
      ],
    },
  ],
  imageWithPosition: [
    // used primarily by the SEO collection
    {
      type: 'object',
      name: 'image',
      label: 'Update Image',
      ui: {
        defaultItem: {
          src: '/uploads/assets/placeholder-sq.webp',
          alt: 'Placeholder Image',
          position: 'center center',
        },
      },
      fields: [
        {
          type: 'image',
          name: 'src',
          label: 'Image',
        },
        {
          type: 'string',
          name: 'alt',
          label: 'Alt Text (Used by Screen Readers)',
        },
        {
          type: 'string',
          name: 'caption',
          label: 'Caption (Text that appears below the image)',
        },
        {
          type: 'string',
          name: 'attr',
          label: 'Attribution',
        },
        {
          type: 'string',
          name: 'position',
          label: 'Position',
          options: options.position,
        },
      ],
    },
  ],
  colors: [
    {
      type: 'string',
      name: 'color',
      label: 'Text / Line Color',
      options: options.colors,
    },
    {
      type: 'string',
      name: 'backgroundColor',
      label: 'Background Color',
      options: options.colors,
    },
  ],
  layout: [
    {
      type: 'object',
      name: 'layout',
      label: 'Layout Settings',
      ui: { defaultItem: { showHeader: true, showFooter: true } },
      fields: [
        {
          type: 'boolean',
          name: 'showHeader',
          label: 'Show Header',
        },

        {
          type: 'boolean',
          name: 'showFooter',
          label: 'Show Footer',
        },
        {
          type: 'boolean',
          name: 'showReviews',
          label: 'Show Reviews',
        },
      ],
    },
  ],
  relations: [
    {
      type: 'object',
      name: 'services',
      label: 'Services',
      list: true,
      ui: {
        itemProps: (item) => ({
          id: item.service,
          key: item.service,
          label: item.service,
        }),
      },
      fields: [
        {
          type: 'reference',
          name: 'service',
          label: 'Service',
          collections: ['service'],
        },
      ],
    },
    {
      type: 'object',
      name: 'types',
      label: 'Service Types',
      list: true,
      ui: {
        itemProps: (item) => ({
          id: item.type,
          key: item.type,
          label: item.type,
        }),
      },
      fields: [
        {
          type: 'reference',
          name: 'type',
          label: 'Types',
          collections: ['type'],
        },
      ],
    },
  ],
  size: [
    // unused
    {
      type: 'string',
      name: 'width',
      label: 'Width',
      options: options.sizes,
    },
    {
      type: 'string',
      name: 'height',
      label: 'Height',
      options: options.sizes,
    },
  ],
  space: [
    // unused
    {
      type: 'object',
      name: 'spacing',
      label: 'Spacing Settings',
      fields: [
        {
          type: 'string',
          label: 'Horizontal Padding',
          name: 'px',
          options: options.space,
        },
        {
          type: 'string',
          label: 'Vertical Padding',
          name: 'py',
          options: options.space,
        },
        {
          type: 'string',
          label: 'Horizontal Margin',
          name: 'mx',
          options: options.space,
        },
        {
          type: 'string',
          label: 'Vertical Margin',
          name: 'my',
          options: options.space,
        },
      ],
    },
  ],
  typography: [
    // unused
    {
      type: 'object',
      name: 'typography',
      label: 'Font Styles',
      fields: [
        {
          type: 'string',
          label: 'Font Family',
          name: 'fontFamily',
          options: options.typography.fontFamily,
        },
        {
          type: 'string',
          label: 'Font Size',
          name: 'fontSize',
          options: options.typography.fontSize,
        },
        {
          type: 'string',
          label: 'Font Weight',
          name: 'fontWeight',
          options: options.typography.fontWeight,
        },
        {
          type: 'string',
          label: 'Line Height',
          name: 'lineHeight',
          options: options.typography.lineHeight,
        },
        {
          type: 'string',
          label: 'Letter Spacing',
          name: 'letterSpacing',
          options: options.typography.letterSpacing,
        },
        {
          type: 'string',
          label: 'Text Align',
          name: 'textAlign',
          options: options.typography.textAlign,
        },
        {
          type: 'string',
          label: 'Text Transform',
          name: 'textTransform',
          options: options.typography.textTransform,
        },
        {
          type: 'string',
          label: 'Text Decoration',
          name: 'textDecoration',
          options: options.typography.textDecor,
        },
      ],
    },
  ],
  decor: [
    // unused
    {
      type: 'object',
      name: 'decorative',
      label: 'Decorative Styles',
      fields: [
        {
          type: 'string',
          label: 'Border',
          name: 'border',
          options: options.decorative.border,
        },
        {
          type: 'string',
          label: 'Border Color',
          name: 'borderColor',
          options: options.colors,
        },
        {
          type: 'string',
          label: 'Rounded',
          name: 'rounded',
          options: options.decorative.rounded,
        },
        {
          type: 'string',
          label: 'Shadow',
          name: 'shadow',
          options: options.decorative.shadow,
        },
      ],
    },
  ],
  seo: [
    // unused in favor of inferred seo in page-layout
    {
      type: 'object',
      name: 'pageSEO',
      label: 'Page SEO',
      // fields: [...fields.page, ...fields.image],
      ui: {
        itemProps: (item) => ({
          id: item.title,
          label: item.title,
          key: item.title,
        }),
      },
      fields: [
        {
          type: 'reference',
          name: 'seo',
          label: 'seo',
          collections: ['seo'],
        },
      ],
    },
  ],
};
