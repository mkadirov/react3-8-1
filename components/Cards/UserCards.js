import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import SmallCards from './SmallCards'

function UserCards() {
  return (
    <Box>
        <Box  display='flex' justifyContent='space-between'>
            <Typography variant='h5'>
              Notifications
            </Typography>

            <Button>
                View All
            </Button>
        </Box>
        <SmallCards/>
    </Box>
  )
}

export default UserCards