import type { Template } from 'tinacms';

import * as blocks from '../blocks';

// ZWgF2
export const templates: Record<string, Template[]> = {
  page: [
    blocks.about,
    blocks.hero,
    blocks.coreServices,
    blocks.locationCta,
    blocks.contact,
  ],
  service: [blocks.title, blocks.coverImage, blocks.divider],
};
