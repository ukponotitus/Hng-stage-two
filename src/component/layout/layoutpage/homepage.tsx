import { Box, Button, Grid, Link, Stack, Typography } from "@mui/material";
import SearchAppBar from "../layout/appbar";
import Header from "../../../images/Header.png"
import Image from "next/image";
import IMDP from "../../../images/IMDP.png"
import Apple from "../../../images/Apple.png"
import {AiFillPlayCircle} from "react-icons/ai"
import FeaturedMovie from "@/component/common/moviecard/movies";
import cardMovie from "@/data";
import FooterPage from "../layout/footer";
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import { authenticate } from "@/pages/services/apis/config";
import { useEffect, useState } from "react";
import { IFeaturedMovie } from "@/lib/interface/featuredmovie";
import React from "react";

export default function HomeLayoutPage(){
  const [data, setData] = React.useState<IFeaturedMovie[]>([]); 
  console.log(data)
  useEffect(() => {
    async function fetchData() {
      try {
        const responseData: IFeaturedMovie[] = await authenticate();
        console.log(responseData );
        setData(responseData)
        return responseData;
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);
  
    return(
        <>
        <Box sx={{ backgroundColor:"white"}}>
        <Box sx={{
            background:`url(${Header.src})`,
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            height: "600px",
        }}>
            <Box>
        	<SearchAppBar />
            </Box>

            <Box sx={{ mt:{md:"93px", xs:"70px"}, 
            width:{ md:"404px", xs:"300px", sm:"500px"},
            ml:{md:"98px", xs:"20px"}}}>
            <Typography
              sx={{
                fontSize:{md:"48px", xs:"30px", sm:"50px"},
                fontWeight: 700,
                lineHeight:{md:"56px", xs:"150%"},
                color: "#FFFFFF",
                pt: {md:"%", xs:"20%"},
              alignItems:"center"
              }}
            >
              John Wick 3 : Parabellum
            </Typography>
            <Stack direction="row" sx={{mt:"18px"}}>
                <Stack direction="row">
                    <Box>
                    <Image src={IMDP} alt="imdp" />
                    </Box>
                    <Typography sx={{mx:"10px", color:"white"}}>860/100</Typography>
                </Stack>
                <Stack direction="row" ml="40px">
                <Box>
                    <Image src={Apple} alt="apple" />
                </Box>
                    <Typography sx={{mx:"10px", color:"white"}}>97%</Typography>
                </Stack>
            </Stack>
            <Box sx={{width:{md:"302px"}, mt:"18px"}}>
            <Typography
              sx={{
                fontSize:{md:"14px", xs:"16px"},
                fontWeight: 500,
                lineHeight: "20px",
                color: "#FFFFFF",
                // textAlign: "center",
              }}
            >
             John Wick is on the run after killing a member of the
              international assassins' guild, and with a
              $14 million price tag on his head, he is the
               target of hit men and women everywhere.
            </Typography>
            </Box>
            
          <Box
          sx={{borderRadius: "6px",
            background: "var(--rose-700, #BE123C)",
            padding:{md:"6px 16px", xs:""},
            ".hover":{
                background: "var(--rose-700, #BE123C)",
            },
            width:"50%",
            mt:"22px"
            }}>
            <Button sx={{
                color:"#FFFFFF"
            }}>
                <AiFillPlayCircle />
                Watch trailer</Button>
          </Box>
          </Box>
        </Box>
        <Box sx={{ml:{md:"98px", xs:""},}}>
        <Stack 
        direction={{md:"row", xs:"column"}} 
        justifyContent="space-between" 
        sx={{mt:"70px", 
        mb:"30px",
        textAlign:"center"
        }}>
        <Typography 
        sx={{ 
        color:"#000", fontSize:"36px", 
        fontWeight:"700"}}>FeaturedMovies</Typography>
        {/* <Link href="/singlepage"> */}
        <Button  sx={{color:"#BE123C", 
        fontSize:"18px",
         textTransform:"none", 
         pr:"65px"}}>
          See more <MdOutlineKeyboardArrowRight /></Button>
        {/* </Link> */}
        </Stack>
        <Grid
                  container
                  rowSpacing={7}
                  columnSpacing={5}
                  // mt="2px"
                  pr={{md:"40px", xs:"0px"}}
                  // sx={{mt:"10px"}}
                >
                  
            {
               data?.slice(0, 10)?.map((item: IFeaturedMovie)=>(
                 <Grid
                      height="100%"
                      key={item.id}
                      item
                      xs={12}
                      sm={6}
                      md={3}
                    >
                 
                    <Link href={`movies/${item.id}`}
                      key={item.id}
                  >
                      <FeaturedMovie
                       key={item.id} 
                       {...item}
                      //  onClick={() => handleItemClick(item)}
                        />
                    </Link>
                    </Grid>

               )) 
            }

                </Grid>
        </Box>
        
        <Box>
          <FooterPage />
        </Box>
        </Box>
        
        </>
    )
}