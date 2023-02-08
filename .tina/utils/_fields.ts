import type { Template } from 'tinacms';
import { mapOptions, options } from './options';

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
  size: [
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
          label: 'attribution',
        },
        // {
        //   type: 'string',
        //   name: 'width',
        //   label: 'Width',
        //   options: options.sizes,
        //   ui: { parse: (val: string) => val.toString() },
        // },
        // {
        //   type: 'string',
        //   name: 'height',
        //   label: 'Height',
        //   options: options.sizes,
        //   ui: { parse: (val: string) => val.toString() },
        // },
        {
          type: 'string',
          name: 'position',
          label: 'Position',
          options: options.position,
        },
      ],
    },
  ],
  space: [
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
  colors: [
    {
      type: 'string',
      name: 'color',
      label: 'Color',
      options: options.colors,
    },
    {
      type: 'string',
      name: 'backgroundColor',
      label: 'Background Color',
      options: options.colors,
    },
  ],
  typography: [
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
      ],
    },
  ],
  decor: [
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
};