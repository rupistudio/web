import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') res.status(405); // Method Not Allowed
  if (!req?.body?.email) res.status(400); // Bad Request

  // handle email subscription logic here

  res
    .status(200)
    .json({ data: { message: '@TODO: setup a email subscription service' } });
}
