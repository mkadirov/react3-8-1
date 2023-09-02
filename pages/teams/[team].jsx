import { getTeamEmployees } from '@/api'
import UserCard from '@/components/Cards/UserCard'
import RootLayout from '@/components/Layout/RootLayout'
import { employeesList } from '@/data/Lists'
import { Grid, Paper, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

 export default function team({data}) {
    // const router = useRouter()
    // let teamName = router.query.team
    // const list = employeesList;
  return (
    <RootLayout>
        <Typography variant='h2' >
           Team: {data.team}
        </Typography>

        <Grid container spacing={3} marginTop={5}>
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


export async function getServerSideProps(context) {
    const res = await getTeamEmployees(context.query.team);
        return {
            props : {data: res.data}
       
        }
    
}

