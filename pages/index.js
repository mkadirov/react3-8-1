import RootLayout from '@/components/Layout/RootLayout'
import {Container, Grid} from '@mui/material'
import TeamChart from '@/components/Charts/TeamChart';
import { TortChart } from '@/components/Charts/TortChart';
import BigCards from '@/components/Cards/BigCards';
import LineChart from '@/components/Charts/LineChart';
import UserCards from '@/components/Cards/UserCards';
import { getTeamsData } from '@/api';



export default function Home({data}) {


  

  return (
    <>
      <RootLayout>
        <Container  sx={{marginTop: 4}}>
         <Grid container spacing={2}>

          <Grid item xs= {12} md={4}>
            <TeamChart list={data}/>
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


export async function getStaticProps(context) {
  const res = await getTeamsData();
  return {
    props: {data: res.data}
  }
}