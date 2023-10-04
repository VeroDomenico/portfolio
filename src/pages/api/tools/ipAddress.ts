// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
//test
type Data = {
  ipaddress: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const ipAddress = req.headers['x-real-ip']?.toString() || 'null';
  res.status(200).json({ ipaddress: ipAddress})
}
