import { Template } from 'tinacms';

import { fields } from '../../utils';

// ZWgF2
export const serviceMenu: Template = {
  label: 'Service Menu',
  name: 'serviceMenu',
  ui: {
    // defaultItem: defaults.serviceMenu,
    previewSrc: '/blocks/preview-service-menu.webp',
  },
  fields: fields.relations,
};
