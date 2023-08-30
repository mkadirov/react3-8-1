import RootLayout from '@/components/Layout/RootLayout'
import { Box, Typography } from '@mui/material'
import { green } from '@mui/material/colors'
import React from 'react'

function Home() {
  return (
    <RootLayout>
        <Typography textAlign='center' marginTop={15} variant='h3' color={'primary.main'}>
            Sahifa topilmadi!!!
        </Typography>
    </RootLayout>
  )
}

export default Home