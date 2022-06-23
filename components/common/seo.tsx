import Head from 'next/head'
import React from 'react'

export interface SeoData {
  title: string
  description: string
  url: string
  thumbnailUrl: string
}

type Props = {
  data: SeoData
}

export function Seo({ data }: Props) {
  const { title, description, url, thumbnailUrl } = data

  return (
    <Head>
      <title>Nextjs Tutorial | Hi</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content="Nextjs Tutorial | Hi" />
      <meta
        property="og:description"
        content="Step by step tutorial to build a full CURD website using Nextjs"
      />
      <meta property="og:image" content={thumbnailUrl} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content="Nextjs Tutorial | Hi" />
      <meta
        property="twitter:description"
        content="Step by step tutorial to build a full CURD website using Nextjs"
      />
      <meta property="twitter:image" content={thumbnailUrl} />
    </Head>
  )
}
