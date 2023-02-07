import { defineConfig } from 'tinacms';
import { schema } from './schema';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || branch,
  clientId: String(process.env.NEXT_PUBLIC_TINA_CLIENT_ID), // Get this from tina.io
  token: String(process.env.NEXT_PUBLIC_TINA_READ_ONLY_TOKEN), // Get this from tina.io
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
  schema,
});
