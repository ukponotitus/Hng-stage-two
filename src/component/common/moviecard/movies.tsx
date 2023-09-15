import cardMovie from "@/data"
import { IFeaturedMovie } from "@/lib/interface/featuredmovie";
import {
    Box,
    Chip,
    Divider,
    Stack,
    Typography,
    useTheme,
    Card,
    IconButton,
    Button,
  } from "@mui/material";
  import Image from "next/image";
  import { StaticImageData } from "next/image";
  import IMDP from "../../../images/IMDP.png"
import Apple from "../../../images/Apple.png"

export default function FeaturedMovie(props:IFeaturedMovie){
    return(
        <>
      <Card
      data-testid="movie-card"
        sx={{
          background: "#FFFFF",
          width:{md:"250px", xs:"100%"},
          height:"490px",
        }}
      >
        <Box
          // boxShadow="0px 14.633px 29.2659px rgba(0, 0, 0, 0.059)"
          height={"100%"}
        >
          <Box height="330px"  position="relative" width={{md:"250px", xs:"100%"}}>
            <Box height="220px">
            <Image
              src={props.img}
              fill={true}
                alt="movie"
                data-testid="movie-poster"
            />
            </Box>
            </Box>
            <Stack sx={{mt:"12px"}}>
            <Box sx={{top:"100%"}}>
                <Typography 
                data-testid="movie-release-date"
                sx={{color: "var(--gray-400, #9CA3AF)", 
                fontSize:"12px",
                 fontWieght:"700"}}>
                  {props.date}</Typography>
                <Typography
                data-testid="movie-title"
                 sx={{
                  color: "var(--gray-900, #111827)",
                 fontSize:"18px",
                  fontWieght:"700",
                   mt:"12px"}}>{props.title}</Typography>
            </Box>
            <Stack direction="row" sx={{mt:"12px"}}>
                <Stack direction="row">
                    <Box>
                    <Image src={IMDP} alt="imdp" />
                    </Box>
                    <Typography sx={{mx:"10px", color:"#000000"}}>860/100</Typography>
                </Stack>
                <Stack direction="row" ml="70px">
                <Box>
                    <Image src={Apple} alt="apple" />
                </Box>
                    <Typography sx={{mx:"10px", color:"#000000"}}>97%</Typography>
                </Stack>
            </Stack>

          <Box
              position="absolute"
              sx={{
                color: "#FFFFFF",
                width: "40px",
                bottom: 5,
                ml: "5px",
                // backgroundColor: "#BD000D",
                alignItems: "center",
                height: "20px",
              }}
            >
              <Box
                sx={{
                  mx: "10px",
                  mt: "3px",
                }}
              >
                {/* <GiRoyalLove /> */}
              </Box>
            </Box>
                <Box>
                    <Typography sx={{color: "var(--gray-400, #9CA3AF)",
                 fontSize:"12px", fontWieght:"700", mt:"12px"}}>{props.description}</Typography>
                </Box>
            </Stack>
          </Box>
        {/* </Box> */}
      </Card>
    </>
    )
}