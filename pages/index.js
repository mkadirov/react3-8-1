import RootLayout from '@/components/Layout/RootLayout'
import {Container, Grid} from '@mui/material'
import TeamChart from '@/components/Charts/TeamChart';
import { TortChart } from '@/components/Charts/TortChart';
import BigCards from '@/components/Cards/BigCards';
import LineChart from '@/components/Charts/LineChart';
import UserCards from '@/components/Cards/UserCards';



export default function Home() {
  return (
    <>
      <RootLayout>
        <Container maxWidth sx={{marginTop: 4}}>
         <Grid container spacing={2}>

          <Grid item xs= {12} md={4}>
            <TeamChart/>
          </Grid>

          <Grid item xs= {12} md={4}>
            <TortChart/>
          </Grid>

          <Grid item xs= {12} md={4}>
          <BigCards/>
          </Grid>
         
         </Grid>

         <Grid container spacing={2} marginTop={10}>
          <Grid item xs = {12} md= {8}>
            <LineChart/>
          </Grid>

          <Grid item xs = {12} md= {4}>
            <UserCards/>
          </Grid>
         </Grid>
        </Container>
      </RootLayout>
    </>
  )
}
