// 'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Suspense } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
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
import { Button, Stack, Grid } from '@mui/material';
import tv from '../../../images/tv.png'
import { MdExpandMore } from "react-icons/md";
import Rating from '@mui/material/Rating';
import { AiFillStar } from "react-icons/ai";
import {GiBlackBook} from 'react-icons/gi';
import single from "../../../images/single.png";
// import { Stack } from "@mui/material";


const apiKey = "9410b21547910fefa7fe72bc3f425156"
const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
export function SingleImage({ src, alt, ...rest }) {
  if (src.startsWith('http') || src.startsWith('https')) {
    return <img src={src} alt={alt} {...rest} />;
  }
  return <Image src={src} alt={alt} {...rest} />;
}
export default function Movie(props) {
  const theme = useTheme();
  const router = useRouter();
  const { movie_id } = router.query;
  const [movie, setMovie] = useState(null);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  

  const movieUrl = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}`;

  useEffect(() => {
    async function getMovie() {
      try {
        const response = await axios.get(movieUrl);
        console.log(response.data);
        setMovie(response.data);
      } catch (e) {
        console.error("Error:", e);
      }
    }
    if (movie_id) {
      getMovie();
    }
  }, [movie_id, movieUrl]);

  if (!movie) {
    return <h1>Loading....</h1>;
  }
  const buttonStyle = {
    padding: "10px 20px",
    color: "white",
    border: "none",
    cursor: "pointer",
  };
  return (
    <Suspense fallback={<h1>Loading....</h1>}>
      <section
        data-testid="movie-container"
      >
       <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon sx={{color:"#BE123C"}} />
          </IconButton>
        </Toolbar>
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
          <IconButton 
          onClick={handleDrawerClose}
          >
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
                <Link href="/">
              <MenuItem
               style={buttonStyle}>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText sx={{fontSize:"12px", 
          fontWeight:500,
          color:"#666666"
          }}>{Home.Home}</ListItemText>
        </MenuItem>
        </Link>
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

        <Box 
        sx={{ml:{md:"15%", xs:"%"}, mt:"px", backgroundColor:"white"}}
          data_testid="movie_info_wrapper"
          
          keys={movie.id}
        >
          <Suspense fallback={<h1>Loading....</h1>}>
            <SingleImage
             src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="movie poster"
              width={1200}
              height={500}

              data_testid="poster"
            />
          </Suspense>

          <div
            style={{pb:"50px"}}
            data-testid="movie-details-wrapper"
          >
            <Grid container spacing={2}> 
            <Grid item md={8}>
              <Stack direction={{md:"row", xs:"column"}} 
              justifyContent="space-between" 
              data-testid="movie-brief" 
              mt="15px"
             >
                  <Box>
                <Typography
                  data-testid="movie-title"
                  sx={{fontSize:{md:"23px", xs:"18px"}, fontWeight:"400", color:"#404040"}}>
                  {movie.title}
                </Typography>
                  </Box>
                  <Box>
                <Typography data-testid="dot"
                sx={{fontSize:{md:"23px", xs:"18px"}, fontWeight:"400", color:"#404040"}}>
                  .
                </Typography>
                  </Box>
                  <Box>
                <Typography
                  data-testid="movie-release-date"
                  sx={{fontSize:{md:"23px", xs:"18px"}, fontWeight:"400", color:"#404040"}}
                >
                  {new Date(movie.release_date).getUTCFullYear()}
                </Typography>
                  </Box>
                  <Box>
                <Typography data-testid="dot"
                sx={{fontSize:{md:"23px", xs:"18px"}, fontWeight:"400", color:"#404040"}}>
                  .
                </Typography>
                  </Box>
                  <Box>
                <Typography
                  data-testid="movie-runtime"
                  sx={{fontSize:{md:"23px", xs:"18px"}, fontWeight:"400", color:"#404040"}}
                >
                  {movie.runtime}min
                </Typography>                  
                  </Box>


                <Box data_testid="action" mt="5px">
                  <Typography sx={{fontSize:"15px", fontWeight:"600", color:"#B91C1C"}}>Action</Typography>
                </Box>
                <Box  mt="5px"
                  data-testid="movie-genre">
                  <Typography sx={{fontSize:"15px", fontWeight:"600", color:"#B91C1C"}}>{movie.genres[0].name}</Typography>
                </Box>
              </Stack>
            <div data-testid="box1_right" >
              <Box
                data_testid="movie_overview"
                width={{md:"100%", xs:"50%"}}
              >
                <Typography sx={{fontSize:{md:"18px", xs:"16px"}, fontWeight:"400", color:"#333333", mt:"15px"}}>
                {movie.overview}
                </Typography>
              </Box>
              <Box data_testid="movie_team" mt="15px"
              width={{md:"100%", xs:"50%"}}>
                <Typography sx={{mt:"20px"}}>
                  Director: <span style={{color:"#BE123C", fontSize:"20px", fontWeight:"400",}}>Joseph Kosinski</span>{" "}
                </Typography>
                <Typography sx={{mt:"20px"}}>
                  Writers: <span style={{color:"#BE123C", fontSize:"20px", fontWeight:"400",}}>Jim Cash, Jack Epps Jr, Peter Craig</span>
                </Typography>
                <Typography  sx={{mt:"20px"}}>
                  Stars:
                  <span style={{color:"#BE123C", fontSize:"20px", fontWeight:"400",}}>Tom Cruise, Jennifer Connelly , Miles Teller</span>
                </Typography>
              </Box>

              <Stack  direction={{md:"row", xs:"column"}}  data-testid="top_rated" 
              sx={{border:"1px solid #C7C7C7", mt:"20px", mx:"px"}}>
                <Box
                sx={{
                  background:"#BE123C",
                  ".hover":{
                    background:"#BE123C",
                  },
              padding:"5px 6px", borderRadius:"10px",
            }}
                  data-testid="top_rated_movie">
                  <Button sx={{color:"white"}}>Top rated movie #65</Button>
                </Box>
                <Stack  direction="row" justifyContent="space-between" >
                <Box data_testid="award">
                  <Box sx={{mx:"20px", mt:"10px"}}>Awards 9 nominations</Box>
                </Box>
                <Box sx={{ml:"290px", mt:"10px"}}>
                  <MdExpandMore fontSize="30px"/>
                </Box>
                </Stack>
              </Stack>
            </div>
            </Grid>


            <Grid item md={4}>
            <Box data-testid="box2_left" sx={{mt:"20px"}} >
              <div data-testid="movie-votes" >
                <Stack data-testid="star-vote" direction="row" justifyContent="end" color="#666666">
                <AiFillStar color="F9F54B" fontSize="18px"/>
                  <span>{movie.vote_average.toFixed(1)}</span>
                    <div data_testid="stroke" >|</div>
                <span>{movie.vote_count}k</span>
                </Stack>
              </div>

              <Box data_testid="show_times" 
              sx={{
                background:"#BE123C",
                  ".hover":{
                    background:"#BE123C",
                  },
              padding:"5px 6px", 
              textAlign:"center",
              borderRadius:"10px",
              mt:"20px"
              }}>
              <Button sx={{color:"white", textAlign:"center"}}>
                <Box sx={{mx:"10px"}}>
                <GiBlackBook />
                </Box>
              See Show times
              </Button>
              </Box>
              <Box data_testid="more"
               sx={{
                background:"#BE123C1A",
                  ".hover":{
                    background:"#BE123C1A",
                  },
              padding:"5px 6px", 
              borderRadius:"10px",
              mt:"20px",
             textAlign:"center"
              }} >
              
              <Button sx={{color:"#333333"}}>
              <Box sx={{mx:"10px"}}>
                <GiBlackBook />
                </Box>
              More watch options</Button>
              </Box>
              <Box sx={{mt:"20px"}}>
              <Image src={single.src } alt="rectangle icon"data_testid="three_image" width={360} height={230}/>
              </Box>
            </Box>

            </Grid>

            </Grid>


          </div>
        </Box>
      </section>
    </Suspense>
  );
}