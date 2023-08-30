import { BusinessCenter, Dashboard, Diversity2, Folder, PeopleOutline, Phone, Settings } from "@mui/icons-material"

export const bigCards = [
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

export const smallCards = [
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


export const menuList = [
    {
        title: 'Dashbord',
        path: '/',
        icon: <Dashboard/>
    },
    {
        title: 'Teams',
        path: '/teams',
        icon: <Diversity2/>
    },
    {
        title: 'Employees',
        path: '/employees',
        icon: <PeopleOutline/>
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <BusinessCenter/>
    },
    {
        title: 'Meetings',
        path: '/meetings',
        icon: <Phone/>
    },
    {
        title: 'Tasks',
        path: '/tasks',
        icon: <Folder/>
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <Settings/>
    },

]