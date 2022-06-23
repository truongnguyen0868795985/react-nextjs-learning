import { FeaturedWorks, HeroSection } from '@/components/home'

import { Box } from '@mui/material'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models/common'
import { RecentPosts } from '@/components/home'

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <HeroSection></HeroSection>
      <RecentPosts />
      <FeaturedWorks />
    </Box>
  )
}

Home.Layout = MainLayout

export default Home
