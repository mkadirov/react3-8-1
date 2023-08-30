import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import logoImg from '../../assets/logo.png'
import DashbordIcon from '../../assets/Dashboard.png'
import TeamsIcon from '../../assets/Teams.png'
import EmployeesIcon from '../../assets/Employees.png'
import ProjectsIcon from '../../assets/Projects.png'
import MeetingsIcon from '../../assets/Meetings.png'
import TasksIcon from '../../assets/Tasks.png'
import SettingsIcon from '../../assets/Settings.png'
import Image from 'next/image';
import { grey } from '@mui/material/colors';
import { Search } from '@mui/icons-material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Avatar } from '@mui/material';
import { menuList } from '@/data/Lists';
import { useRouter } from 'next/router';


const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function RootLayout({children}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const router = useRouter();

  console.log(router);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const StyledListItem = styled(ListItem)(({theme}) => ({
    marginBottom: '10px',
    '&:hover ,&.active': {
      backgroundColor: theme.palette.primary.main,
      color: 'white'
    }
  }))

  const list = menuList;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" open={open} sx={{boxShadow: 'none', py: 1, backgroundColor: 'white'}} >
        <Toolbar sx={{backgroundColor: 'white', color: 'black', display: 'flex', justifyContent: 'space-between'}}>
            <Box display='flex'>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{ mr: 2, ...(open && { display: 'none' }) }}
                >
                  <MenuIcon />
                </IconButton>
                <Box>
                <Typography variant="h6" noWrap component="div">
                  Good Morning Anima
                </Typography>
                <Typography fontSize={12} sx={{color: grey[500]}}>
                  Hope you have a good day
                </Typography>
                </Box>
            </Box>

            <Box display='flex' gap={1}>
                <IconButton>
                    <Search/>
                </IconButton>

                <IconButton>
                     <NotificationsNoneIcon/>
                </IconButton>

                <Avatar src='https://images.unsplash.com/photo-1586351012965-861624544334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'/>
            </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: grey[100]
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Box display='flex' justifyContent='space-between' marginY={2} marginLeft={1}>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <Image src={logoImg} />
              <Typography sx={{color: '#7054e4', fontWeight: '700'}} variant='h5'>
                Teamify
              </Typography>
            </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Box>
        <Divider />
        <List sx={{marginTop: 2}}>
          {list.map((item, index) => {
            const path = item.path
            const route = router.route
            return (
              <Box key={index}>
                <StyledListItem   disablePadding className={ (route.startsWith(path) && path.length !=1 || path == route)? 'active' : 'inactive'}>
              <ListItemButton
                 onClick={() => router.push(item.path)}
              >
                {item.icon}
                <Typography sx={{marginLeft: 2}}>
                  {item.title}
                </Typography>
              </ListItemButton>
            </StyledListItem>
            {
              index == 3? <Divider sx={{marginY: 2}}/> : <Box></Box>
            }
          </Box>
            )
           }
          )}
        </List>

      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}