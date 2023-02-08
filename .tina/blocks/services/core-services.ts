import type { Template } from 'tinacms';
import { fields } from '../../utils/_fields';

const services = fields.relations.length ? [fields.relations[1]] : [];

export const coreServices: Template = {
  label: 'Featured Services',
  name: 'coreServices',
  ui: {
    defaultItem: {
      services: [
        { service: '_content/categories/eyebrows.mdx' },
        { service: '_content/categories/hair-removal/body-waxing.mdx' },
        { service: '_content/categories/hair-removal/laser-hair-removal.mdx' },
        { service: '_content/categories/hair-removal/ipl.mdx' },
      ],
    },
  },
  fields: [...services],
};
