import type { Template } from 'tinacms';
import { fields } from '../../utils/_fields';

const services = fields.relations.length ? [fields.relations[0]] : [];

export const coreServices: Template = {
  label: 'Featured Services',
  name: 'coreServices',
  ui: {
    previewSrc: '/blocks/preview-core-services.webp',
    defaultItem: {
      services: [
        { service: '_content/services/eyebrows.mdx' },
        { service: '_content/services/skin-care.mdx' },
        { service: '_content/services/hair-removal.mdx' },
        { service: '_content/services/addons/lipo.mdx' },
      ],
    },
  },
  fields: [...services],
};
