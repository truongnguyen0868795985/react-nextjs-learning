import { Card, CardContent, Divider, Typography } from '@mui/material'

import { Post } from '@/models/index'
import React from 'react'

type Props = {
  post: Post
}

export default function PostCard({ post }: Props) {
  if (!post) return null
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          {post.title}
        </Typography>
        <Typography variant="body1" my={2} sx={{ display: 'flex' }}>
          {post.publishedDate}

          <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />

          {post.tagList.join(', ')}
        </Typography>
        <Typography variant="body2">{post.description}</Typography>
      </CardContent>
    </Card>
  )
}
