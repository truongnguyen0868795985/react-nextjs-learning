import { Box, Card, CardContent, Divider, Stack, Typography } from '@mui/material'

import { Post } from '@/models'
import { PostItem } from '../blog'
import React from 'react'

type Props = {
  post: Post
}

export default function PostCard({ post }: Props) {
  if (!post) return null
  return (
    <Card>
      <CardContent>
        <PostItem post={post} />
      </CardContent>
    </Card>
  )
}
