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
  return new Promise((resolve) => {
    const cookies = new Cookies(req, res)

    if (cookies.get('access_token')) {
      req.headers.Authorization = 'Bearer ' + cookies.get('access_token')
    }

    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: false,
    })

    proxy.once('proxyRes', function () {
      resolve(true)
    })
  })
}
