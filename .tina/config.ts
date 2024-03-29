import { defineConfig } from 'tinacms';

import { page, seo, service, type } from './collections';

// Your hosting provider likely exposes this as an environment variables
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
  branch: process.env.TINA_PUBLIC_BRANCH || branch,
  clientId: String(
    // 'ea0462d5-24f5-4b80-acfd-71bb3c26cd2c' ||
    process.env.TINA_PUBLIC_CLIENT_ID
  ), // Get this from tina.io
  token: String(
    // '9d67782a084d1980113d45e9a0042107671ac94a' ||
    process.env.TINA_PUBLIC_READ_ONLY_TOKEN
  ), // Get this from tina.io
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [page, service, type, seo],
  },
});
