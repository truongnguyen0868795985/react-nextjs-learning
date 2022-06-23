import { Box, Chip, Stack, Typography } from '@mui/material'

import Image from 'next/image'
import React from 'react'
import { Work } from '@/models'

type Props = {
  work: Work
}

export function WorkCard({ work }: Props) {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
      <Box width={{ xs: '100%', md: '246px' }}>
        <Image
          src={work.thumbnailUrl}
          width={246}
          height={180}
          layout="responsive"
          alt="work thumbnail"
        />
      </Box>
      <Box>
        <Typography variant="h4" fontWeight="bold">
          {work.title}
        </Typography>
        <Stack direction="row" my={2}>
          <Chip
            color="secondary"
            label={new Date(Number.parseInt(work.createdAt)).getFullYear()}
            size="small"
          />
          <Typography ml={3} color="GrayText">
            {work.tagList.join(', ')}
          </Typography>
        </Stack>
        <Typography>{work.shortDescription}</Typography>
      </Box>
    </Stack>
  )
}
