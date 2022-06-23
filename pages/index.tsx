import { FeaturedWorks, HeroSection } from '@/components/home'

import { Box } from '@mui/material'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models/common'
import { RecentPosts } from '@/components/home'
import { Seo } from '@/components/common'

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <Seo
        data={{
          title: 'Nextjs Tutorial | Hi',
          description: 'Step by step tutorial to build a full CURD website using Nextjs',
          thumbnailUrl: '',
          url: '',
        }}
      />
      <HeroSection></HeroSection>
      <RecentPosts />
      <FeaturedWorks />
    </Box>
  )
}

Home.Layout = MainLayout

export default Home
