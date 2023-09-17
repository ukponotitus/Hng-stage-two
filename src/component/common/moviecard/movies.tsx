import cardMovie from "@/data"
import { IFeaturedMovie, IMissing } from "@/lib/interface/featuredmovie";
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
  // import { StaticImageData } from "next/image";
  import IMDP from "../../../images/IMDP.png"
import Apple from "../../../images/Apple.png"
import { authenticate } from "@/pages/services/apis/config";
import { useEffect } from "react";
import Router, { useRouter } from "next/router";



interface LinlImage{
  src:string;
  alt:string;
  width?: number; 
  height?: number;
  objectFit?:string;

}
const Missing:IMissing[]=[
  {
    description:"Action, Adventure, Horror"
  },
  {
    description:"Action, Adventure"
  },
  {
    description:"Animation, Action, Adventure"
  },
  {
    description:"Action, Drama, History"
  },
  {
    description:"Action, Adventure, Drama"
  },
  {
    description:"Action, Adventure, Drama"
  },
  {
    description:"Action, Adventure, Fantasy"
  },
  {
    description:"Action, Drama, Horror "
  },
  {
    description:"Action, Adventure, Horror"
  },
  {
    description:"Action, Drama, Horror "
  },  

  ]

export function SingleImage({ src, alt, ...rest }: LinlImage) {
  if (src.startsWith('http') || src.startsWith('https')) {
    return <img src={src} alt={alt} {...rest} />;
  }
  return <Image src={src} alt={alt} {...rest} />;
}

export default function FeaturedMovie(props:IFeaturedMovie){


    return(
        <>
      <Card
      data-testid="movie-card"
        sx={{
          background: "#FFFFF",
          width:{md:"250px", xs:"100%"},
          height:"490px",
          boxShadow:"none",
          border:"solid red"
        }}
      >
        <Box
          height={"100%"}
        >
          <Box height="330px"  position="relative" width={{md:"150px", xs:"100%"}}>
            <Box height="120px">
            <SingleImage
                src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}
                alt={props.title}
                data-testid="movie-poster"
                width={400}
                height={300}
                objectFit= 'cover'
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
                  {props. release_date}</Typography>
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
              </Box>
            </Box>
                <Box>
                    <Typography
                    data-testid="movie-poster"
                     sx={{color: "var(--gray-400, #9CA3AF)",
                 fontSize:"12px", fontWieght:"700", mt:"10px"}}>{props.description ||  (Missing[0] ? Missing[0].description : '')}</Typography>
                </Box>
            </Stack>
          </Box>
      </Card>
    </>
    )
}