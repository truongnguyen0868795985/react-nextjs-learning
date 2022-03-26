import type { NextApiRequest, NextApiResponse } from 'next'

import Cookies from 'cookies'
import httpProxy from 'http-proxy'

// type Data = {
//   name: any
// }
export const config = {
  api: {
    bodyParser: false,
  },
}

const proxy = httpProxy.createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method !== 'POST') {
    res.status(404).json({ message: 'Invalid method' })
  }

  const cookies = new Cookies(req, res)
  cookies.set('access_token')
  res.status(200).json({ message: 'Logout successful' })
}
