import { Box } from '@mui/material'

type Props = {}

export default function HeaderMobile({}: Props) {
  return <Box display={{ xs: 'block', md: 'none' }}>Header Mobile</Box>
}
