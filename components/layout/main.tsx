import { Box, Container, Stack } from '@mui/material'
import { Footer, Header } from '@/components/common'

import { LayoutProps } from '@/models/common'
import Link from 'next/link'

export interface MainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />

      <Box component="main" flexGrow={1}>
        {children}
      </Box>

      <Footer />
    </Stack>
  )
}
