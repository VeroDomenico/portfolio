// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
//test
type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const ipAddress = req.headers['x-real-ip']?.toString() || 'null';
  console.log('Headers:', req.headers);
  
  res.status(200).json({ name: ipAddress})
}
