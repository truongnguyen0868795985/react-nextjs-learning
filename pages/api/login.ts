import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy, { ProxyResCallback } from 'http-proxy'

import Cookies from 'cookies'

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

  return new Promise((resolve) => {
    // don't send cookies to API server
    req.headers.cookie = ''

    const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
      let body = ''

      proxyRes.on('data', function (chunk) {
        body += chunk
      })

      proxyRes.on('end', function () {
        try {
          const { accessToken, expiredAt } = JSON.parse(body)
          console.log({ accessToken, expiredAt })
          // convert token to cookies
          const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' })
          cookies.set('access_token', accessToken, {
            httpOnly: true,
            sameSite: 'lax',
            expires: new Date(expiredAt),
          })
          ;(res as NextApiResponse).status(200).json({ message: 'login successfully' })
        } catch (error) {
          ;(res as NextApiResponse).status(500).json({ message: 'something went wrong' })
        }
      })
    }

    proxy.once('proxyRes', handleLoginResponse)

    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: true,
    })
  })
}
