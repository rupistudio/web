import * as fs from 'fs/promises';
import matter from 'gray-matter';
import type { NextApiRequest, NextApiResponse } from 'next';

interface FrontMatterData {
  [key: string]: any;
}
/**
 * Takes in a list of tina reference filePaths and returns a list of frontmatter data
 *
 * filePaths: [
 *   '_content/options/addons/dermaplaning.mdx',
 *   '_content/options/addons/led-light-therapy.mdx',
 *   '_content/options/addons/microdermabrasion.mdx',
 * ]
 *
 * @param {string[]} filePaths
 * @return {*}  {Promise<FrontMatterData>}
 *
 * @see: '.tina/schema.ts'
 */
const parseFrontMatterData = async (
  filePaths: string[]
): Promise<FrontMatterData> => {
  const data: FrontMatterData = {};

  for (const filePath of filePaths) {
    const fileContents = await fs.readFile(filePath, 'utf-8');
    const { data: frontMatterData } = matter(fileContents);
    const key = filePath.split('/').pop() || '';

    data[key] = frontMatterData;
  }

  return data;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') res.status(405); // method not allowed
  if (!req?.body?.filePaths && !req?.body?.filePaths?.length) res.status(400); // bad request
  try {
    const { filePaths } = req.body;
    const data = await parseFrontMatterData(filePaths);

    res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error }); // internal server error
  }
}
