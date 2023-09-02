import { getEmployees } from '@/api';
import UserCard from '@/components/Cards/UserCard';
import RootLayout from '@/components/Layout/RootLayout'

import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function Employees({data}) {

  
  return (
    <RootLayout>
        <Typography variant='h2'>
          Employees
        </Typography>

        <Grid container spacing={3} marginTop={5} >
            {
                data.map((user, idx) => {
                    return(
                        <Grid item sx={12} md= {6} lg= {4} xl= {3} key={idx}>
                            <UserCard item={user}/>
                        </Grid>
                    )
                })
            }
        </Grid>
    </RootLayout>
    
  )
}

export async function getStaticProps(context) {
  
  const res = await getEmployees();
  if(res.success) {
    return {
      props: { data: res.data}
    }
  }else {
    props: {data: []}
  }
}