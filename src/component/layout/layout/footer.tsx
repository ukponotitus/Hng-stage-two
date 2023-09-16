import { Box, Stack, Typography } from '@mui/material'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillPlaySquare} from "react-icons/ai"

export default function FooterPage(){
    return(
        <>
        <Box sx={{
        width:{md:"1300px", xs:"300px"}, 
        height: "245px",mx:"auto",
        //  border:"solid red",
          mt:{md:"147px", xs:"94px"}
          }}>
            <Box sx={{mx:{md:"auto", xs:"0px"}, 
            // alignItems:"center", 
            width:{md:"500px", xs:"300px"}}}>
            <Stack direction="row" justifyContent="space-around">
                <AiFillFacebook fontSize="26px"/>
                <AiOutlineInstagram  fontSize="26px" />
                <AiOutlineTwitter   fontSize="26px"/>
                <AiFillPlaySquare   fontSize="26px"/>
            </Stack>
            <Stack  direction={{md:"row", xs:"column"}} justifyContent="space-between" sx={{mt:"20px", mx:"20px"}}>
                <Box width=" px" height=" px">
                <Typography sx={{color:"#111827", fontSize:"18px", fontWeight:700, mt:{xs:"10px", md:""}}}>Conditions of Use</Typography>
                </Box>
                <Typography sx={{color:"#111827", fontSize:"18px", fontWeight:700, mt:{xs:"10px", md:""}}}>Privacy & Policy</Typography>
                <Typography sx={{color:"#111827", fontSize:"18px", fontWeight:700,  mt:{xs:"10px", md:""}}}>Press Room</Typography>
            </Stack>
            <Box sx={{mt:"25px", color:"#6B7280", fontSize:"18px", fontWeight:700, textAlign:"center"}}>
                <Typography>
                © 2021 MovieBox by Adriana Eka Prayudha  
                </Typography>
            </Box>
            </Box>
        </Box>
        </>
    )
}