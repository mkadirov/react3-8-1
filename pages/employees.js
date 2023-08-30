import UserCard from '@/components/Cards/UserCard';
import RootLayout from '@/components/Layout/RootLayout'
import { employeesList } from '@/data/Lists'
import { Grid, Typography } from '@mui/material'
import React from 'react'

function employees() {

  const list = employeesList;
  return (
    <RootLayout>
        <Typography variant='h2'>
          Employees
        </Typography>

        <Grid container spacing={3} marginTop={5} >
            {
                list.map((user, idx) => {
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

export default employees