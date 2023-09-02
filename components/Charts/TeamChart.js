import React from 'react';
import { Box, Grid, Typography, styled } from '@mui/material'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';


function TeamChart({list}) {
        ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );
      
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: 'Teams Strength',
          },
        },
      };
      
      const labels = list.map(item => item.shortName);
      const goals = list.map(item => item.goal);
      const colors = list.map(item => item.color)
      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: goals,
            backgroundColor: colors
          }
        ],
      };

      const IconBtn = styled(Box)({
        width: '30px', 
        height: '30px',  
        color: 'white', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
      })


  return (
    <Box sx={{border: '1px solid grey', p: '20px', height: {sm: '50vh', xl: '45vh'}}}>
        <Bar options={options} data={data} /> 

        <Box marginTop={2} display='flex' gap={8}>
           <Grid container >
              {
                list.map((item, idx) => {
                    return(
                        <Grid item xs={6} key={idx} display='flex' alignItems='center' marginBottom={2} gap={2}>
                            <IconBtn sx={{backgroundColor: `${item.color}`}}>
                                {item.shortName}
                            </IconBtn>
                            <Typography>
                                {item.name}
                            </Typography>
                        </Grid>
                    )
                })
              }
           </Grid>
        </Box>
    </Box>
  )
}

export default TeamChart;

