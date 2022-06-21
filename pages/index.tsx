import { Box } from '@mui/material'
import { HeroSection } from '@/components/home'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models/common'

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <HeroSection></HeroSection>
    </Box>
  )
}

Home.Layout = MainLayout

export default Home
