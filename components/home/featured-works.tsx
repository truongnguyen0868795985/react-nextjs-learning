import { Box, Container, Link as MuiLink, Stack, Typography } from '@mui/material'
import { Post, Work } from '@/models'

import Link from 'next/link'
import PostCard from './post-card'
import React from 'react'
import { WorkList } from '../work'

type Props = {}

export function FeaturedWorks({}: Props) {
  const workList: Work[] = [
    {
      id: 1,
      title: 'Designing Dashboards',
      createdAt: '1655893224367',
      updatedAt: '',
      tagList: ['Dashboard'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      thumbnailUrl:
        'https://res.cloudinary.com/dck2bpnqu/image/upload/v1655956129/learn-nextjs/item-3_r7r1sn.jpg',
    },
    {
      id: 2,
      title: 'Vibrant Portraits of 2020',
      createdAt: '1655893224367',
      updatedAt: '',
      tagList: ['Illustration'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      thumbnailUrl:
        'https://res.cloudinary.com/dck2bpnqu/image/upload/v1655956129/learn-nextjs/item-2_nlssuw.jpg',
    },
    {
      id: 3,
      title: '36 Days of Malayalam type',
      createdAt: '1655893224367',
      updatedAt: '',
      tagList: ['Typography'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      thumbnailUrl:
        'https://res.cloudinary.com/dck2bpnqu/image/upload/v1655956129/learn-nextjs/item-1_a8ywnw.jpg',
    },
  ]

  return (
    <Box component="section" pt={2} pb={4}>
      <Container>
        <Typography variant="h5">Featured works</Typography>

        <WorkList workList={workList} />
      </Container>
    </Box>
  )
}
