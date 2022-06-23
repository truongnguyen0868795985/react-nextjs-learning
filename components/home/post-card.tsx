import { Box, Card, CardContent, Divider, Stack, Typography } from '@mui/material'

import { Post } from '@/models'
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

        <Stack direction="row" my={2}>
          <Typography variant="body1">{post.publishedDate}</Typography>

          <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />
          <Typography variant="body1">{post.tagList.join(', ')}</Typography>
        </Stack>

        <Typography variant="body2">{post.description}</Typography>
      </CardContent>
    </Card>
  )
}
