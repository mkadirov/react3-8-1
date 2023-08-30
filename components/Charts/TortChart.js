import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Box, Grid, Stack, Typography } from '@mui/material';



export function TortChart() {
   ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: '# of Votes',
      data: [254, 3000, 3254],
      backgroundColor: [
        'blue',
        'green',
        'coral',
        
      ]
    },
  ],
};

  const list = [
    {
        status: 'inactive',
        num: 254,
        color: 'green'
    },
    {
        status: 'inactive',
        num: 3000,
        color: 'red'
    },
    {
        status: 'inactive',
        num: 3254,
        color: 'yellow'
    },
  ]
  return (
    <Box  sx={{border: '1px solid grey', p: '20px', height: {sm: '50vh', xl: '45vh'}}}>
        
        <Grid container >
            <Grid item xs= {3}>
                <Box sx={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                    {
                        list.map((item, idx) => {
                            return (
                                <Box sx={{flex: 1}} key={idx}>
                                    <Box display='flex' alignItems='center' gap={2} >
                                        <Box sx={{width: '10px', height: '10px', backgroundColor: `${item.color}`}}>

                                        </Box>
                                        <Typography>
                                            {item.status}
                                        </Typography>
                                    </Box>
                                    <Typography>
                                        {item.num}
                                    </Typography>
                                </Box>
                            )
                        })
                    }
                </Box>
            </Grid>
            <Grid item xs= {9} display='flex' justifyContent='center'>
               <Doughnut data={data} />
            </Grid>
        </Grid>
    </Box>
  )
}
