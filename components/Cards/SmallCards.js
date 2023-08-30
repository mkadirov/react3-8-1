import { smallCards } from '@/data/Lists'
import { Box, Typography } from '@mui/material'
import React from 'react'



function SmallCards() {

    const list = smallCards;
  return (
    <Box display='flex' flexDirection='column' height={'40vh'}>
        {
            list.map((item, idx) => {
                return (
                    <Box flex={1} display='flex' gap={2} key={idx} >
                        <Box sx={{width: '50px', height: '50px'}}>
                            <img src={item.image} alt="" />
                        </Box>
                        <Box>
                            <Typography>
                                {item.info}
                            </Typography>

                            <Typography>
                                {item.date}
                            </Typography>
                        </Box>
                    </Box>
                )
            })
        }
    </Box>
  )
}

export default SmallCards