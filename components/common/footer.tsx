import { Box, Icon, Stack, Typography } from '@mui/material'
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'

export function Footer() {
  const socialLinks = [
    { icon: Facebook, url: 'https://google.com/facebook' },
    { icon: Instagram, url: 'https://google.com' },
    { icon: Twitter, url: 'https://google.com' },
    { icon: LinkedIn, url: 'https://google.com' },
  ]
  return (
    <Box component="footer" py={2} textAlign="center">
      <Stack direction="row" justifyContent="center">
        {socialLinks.map((item, idx) => (
          <Box
            key={idx}
            component="a"
            p={2}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            color="black"
          >
            <Icon component={item.icon} sx={{ fontSize: 48 }} />
          </Box>
        ))}
      </Stack>
      <Typography>Copyright ©{new Date().getFullYear()} All rights reserved</Typography>
    </Box>
  )
}
