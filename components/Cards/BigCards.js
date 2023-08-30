import { Box, Grid, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'

function BigCards() {

    const list = [
        {
            mainText: 'Top 10',
            subtitle: 'Position in dribbble',
            info: '20% Increase from Last Week'
        },
        {
            mainText: '26',
            subtitle: 'New employees onboarded',
            info: '15% Increase from Last Month'
        },
        {
            mainText: '500',
            subtitle: 'New Clients Approached',
            info: '5% Increase from Last Week'
        }
    ]
  return (
    <Grid display='flex' justifyContent='center' container spacing={2} height='45vh'>
        {
            list.map((item, idx) => {
                return (
                    <Grid item xs={11} key={idx} align= 'center' flex={1} >
                        <Box  paddingY={1} sx={{width: '100%', backgroundColor: grey[300], borderRadius: '20px'}}>
                            <Typography variant='h4'>{item.mainText}</Typography>
                            <Typography>
                               {item.subtitle}
                            </Typography>

                            <Typography fontSize={12} sx={{color: grey[400]}}>
                               {item.info}
                            </Typography>
                        </Box>
                    </Grid>
                )
            })
        }
    </Grid>
  )
}

export default BigCards