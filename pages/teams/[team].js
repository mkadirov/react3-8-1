import UserCard from '@/components/Cards/UserCard'
import RootLayout from '@/components/Layout/RootLayout'
import { employeesList } from '@/data/Lists'
import { Box, Grid, Paper, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

function team() {
    const router = useRouter()
    let teamName = router.query.team
    const list = employeesList;
  return (
    <RootLayout>
        <Typography variant='h2' >
           Team: {teamName}
        </Typography>

        <Grid container spacing={3} marginTop={5}>
            {
                list.filter(item => item.team == teamName).map((user, idx) => {
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

export default team