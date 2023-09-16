import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
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
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IFeaturedMovie, IFeaturedSingleMovie, singleMovieData } from '@/lib/interface/featuredmovie';
import SingleMovieData from '@/data';
import MenuItem from '@mui/material/MenuItem';
import ContentCut from '@mui/icons-material/ContentCut';
import MenuList from '@mui/material/MenuList';
import { Button, Stack } from '@mui/material';
import tv from "../images/tv.png"
import Image from 'next/image';
import { authenticate } from './services/apis/config';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
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
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
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
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


export default function SingleItemDisplay(props: IFeaturedSingleMovie) {
  const [data, setData] = React.useState<IFeaturedMovie[]>([]); 
  React.useEffect(() => {
    async function fetchData() {
      try {
        const responseData: IFeaturedMovie[] = await authenticate();
        console.log(responseData );
        setData(responseData)
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', background:"white" }}>
      {/* <CssBaseline /> */}
      <AppBar position="fixed" elevation={0} open={open}
      sx={{backgroundColor:"transparent"}}>
        <Toolbar>
          <IconButton
            // color="#BE123C"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon sx={{color:"#BE123C"}} />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
          {SingleMovieData?.map((Home, index) => (
            <MenuList key={Home.id} disablePadding sx={{ml:"40px"}}>
              <Box sx={{ml:"-25px"}}>
                <MenuItem>
              <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            // sx={{ mr:{md: 4, xs:1 }}}
          >
            <Image src={tv} alt='logo' />
          </IconButton>
          <Typography
            // variant="h2"
            noWrap
            sx={{fontSize:"20px", fontWeight:"700"}}
          >
            MovieBox
          </Typography>
                </MenuItem>
              </Box>
              <Box sx={{mt:"30px"}}>
              <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText sx={{fontSize:"12px", 
          fontWeight:500,
          color:"#666666"
          }}>{Home.Home}</ListItemText>
        </MenuItem>
              </Box>
          <Box  sx={{mt:"30px"}}>
        <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText sx={{fontSize:"12px", 
          fontWeight:500,
          color:"#666666"
          }}>{Home.Movies}</ListItemText>
        </MenuItem>
          </Box>
          <Box sx={{mt:"30px"}}>
        <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText sx={{fontSize:"12px", 
          fontWeight:500,
          color:"#666666"
          }}>{Home.Tvseries}</ListItemText>
        </MenuItem>
          </Box>
          <Box sx={{mt:"30px"}}>
        <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText sx={{fontSize:"12px", 
          fontWeight:500,
          color:"#666666"
          }}>{Home.upcoming}</ListItemText>
        </MenuItem>
          </Box>
          <Box sx={{mt:"30px"}}>
        <Box border="solid #BE123CB2 1px" width="150px" height="210px">
          <Stack   sx={{textAlign:"center", px:"10px", mt:"30px"}}>
          <Typography sx={{fontSize:"16px", 
          fontWeight:600, color:"#333333CC"}}>
            {Home.descriptionTitle}</Typography>
          <Typography  sx={{fontSize:"12px", 
          fontWeight:500, color:"#666666",
          mt:"5px"}}>{Home.description}</Typography>
          <Box sx={{backgroundColor:"#BE123C33", 
          ".hover":{background:"#BE123C33"},
          padding:"0px 0px",
          borderRadius:"20px",
          mt:"10px"
          }}>
            <Button sx={{color:"#BE123C", 
            fontSize:"12px", 
          fontWeight:500,}}>Start playing</Button>

          </Box>
          </Stack>

        </Box>
          </Box>
          <Box sx={{mt:"30px"}}>
        <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText sx={{fontSize:"12px", 
          fontWeight:500,
          color:"#666666"
          }}>{Home.logout}</ListItemText>
        </MenuItem>
          </Box>

          
            </MenuList>
            
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        {/* <DrawerHeader /> */}
        <Typography paragraph>
        <Box
          // data_testid="movie_info_wrapper"
          // className={styles["movie_info_wrapper"]}
          // keys={movie.id}
        >
          <React.Suspense fallback={<h1>Loading....</h1>}>
            <Image
              src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
              alt="movie poster"
              width={700}
              height={500}
              // data_testid="poster"
              // className={styles["poster"]}
            />
          </React.Suspense>
          </Box>
        </Typography>
        <Typography paragraph>
        </Typography>
        {/* {selectedItem ? <p>Selected Item: {selectedItem}</p> : <p>No item selected</p>} */}
      </Main>
    </Box>
  );
}