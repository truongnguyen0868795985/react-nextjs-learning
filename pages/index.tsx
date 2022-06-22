import { Box } from '@mui/material'
import { HeroSection } from '@/components/home'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models/common'
import { RecentPosts } from '@/components/home/index'

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <HeroSection></HeroSection>
      <RecentPosts />
    </Box>
  )
}

Home.Layout = MainLayout

export default Home
