import { bigCards } from '@/data/Lists'
import { Box, Grid, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'

function BigCards() {

    const list = bigCards;
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