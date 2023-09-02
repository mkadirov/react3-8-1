import { getTeams } from '@/api';
import TeamCard from '@/components/Cards/TeamCard';
import RootLayout from '@/components/Layout/RootLayout'
import { Box, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function teams({data}) {
  const router = useRouter();


  // const [list, setList] = useState([])

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await getTeams();
  //     console.log(res);
  //     if(res.success) {
  //       setList(res.data)
  //     }
  //   }

  //   fetchData();
  // }, [])
  
  
  return (
    <RootLayout>
        <Typography variant='h2' textAlign='center'>
          Teams
        </Typography>

        <Box marginTop={5}>
          <Grid container spacing={3}>
            {
              data?.map((item, idx) => {
                return (
                  <Grid key={idx} item xs={12} md={6} lg={3}>
                    <Box onClick = {() => router.push('/teams' + item.path)} >
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




export async function getStaticProps(context) {
  const res = await getTeams();
  return {
    props: {data: res.data}
  }
} 