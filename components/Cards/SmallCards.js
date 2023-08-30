import { Box, Typography } from '@mui/material'
import React from 'react'



function SmallCards() {

    const list = [
        {
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHIlQzMlQTR0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            info: 'Ellie joined team developers',
            date: '04 April, 2021 | 04:00 PM'
        },
        {
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHIlQzMlQTR0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            info: 'Ellie joined team developers',
            date: '04 April, 2021 | 04:00 PM'
        },
        {
            image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHIlQzMlQTR0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            info: 'Ellie joined team developers',
            date: '04 April, 2021 | 04:00 PM'
        },
        {
            image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHIlQzMlQTR0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            info: 'Ellie joined team developers',
            date: '04 April, 2021 | 04:00 PM'
        },
    ]
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