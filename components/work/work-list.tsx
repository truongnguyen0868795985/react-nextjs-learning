import { Box, Divider, Stack } from '@mui/material'
import React, { Fragment } from 'react'

import PostCard from '../home/post-card'
import { Work } from '@/models'
import { WorkCard } from './work-card'

type Props = {
  workList: Work[]
}

export function WorkList({ workList }: Props) {
  if (workList.length === 0) return null

  return (
    <Box>
      {workList.map((work) => (
        <Fragment key={work.id}>
          <WorkCard work={work} />
          <Divider sx={{ my: 3 }} />
        </Fragment>
      ))}
    </Box>
  )
}
