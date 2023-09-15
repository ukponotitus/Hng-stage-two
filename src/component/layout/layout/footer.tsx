import { Box, Stack } from '@mui/material'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillPlaySquare} from "react-icons/ai"

export default function FooterPage(){
    return(
        <>
        <Box sx={{width: "1440px", height: "245px",mx:"auto", border:"solid red", mt:"147px"}}>
            <Box sx={{mx:"auto", alignItems:"center", width: "300px"}}>
            <Stack direction="row" justifyContent="space-around">
                <Box width=" 24px" height=" 27.429px">
                <AiFillFacebook height="inherit" width="inherit"/>
                </Box>
                <AiOutlineInstagram />
                <AiOutlineTwitter />
                <AiFillPlaySquare />
            </Stack>
            <Stack direction="row" justifyContent="space-around">
                <Box width=" 24px" height=" 27.429px">
                <AiFillFacebook height="inherit" width="inherit"/>
                </Box>
                <AiOutlineInstagram />
                <AiOutlineTwitter />
                <AiFillPlaySquare />
            </Stack>
            </Box>
        </Box>
        </>
    )
}