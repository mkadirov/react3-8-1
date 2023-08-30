import TeamCard from '@/components/Cards/TeamCard';
import RootLayout from '@/components/Layout/RootLayout'
import { teamList } from '@/data/Lists'
import { Box, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react'

function teams() {
  const router = useRouter();
  const list = teamList;
  return (
    <RootLayout>
        <Typography variant='h2' textAlign='center'>
          Teams
        </Typography>

        <Box marginTop={5}>
          <Grid container spacing={3}>
            {
              list.map((item, idx) => {
                return (
                  <Grid key={idx} item xs={12} md={6} lg={3}>
                    <Box onClick = {() => router.push('/teams' + item.path)}>
                      <TeamCard item = {item} />
                    </Box>
                  </Grid>
                )
              })
            }
          </Grid>
        </Box>
    </RootLayout>
  )
}

export default teams