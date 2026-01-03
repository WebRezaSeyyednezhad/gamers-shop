import React, {useState, useEffect} from "react";
import { Typography, Box, Accordion, AccordionDetails, AccordionSummary, Divider, Chip, IconButton, Tooltip, Card, CardHeader, CardMedia, CardContent, CardActions, Avatar} from "@mui/material";
import Header from "../../Header";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
export default function Error(){
    return(
        <Box>
            <Header />
            <Box sx={{width:"100%", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center", pt: 12 ,backgroundImage: "url('https://images6.alphacoders.com/134/thumb-1920-1349463.png')", backgroundPosition:"center", backgroundAttachment:"fixed"}}>
                <Box sx={{width:"90%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                    <Typography variant="h1" sx={{textShadow:"0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px rgb(255, 24, 24), 0 0 30px rgb(255, 24, 24), 0 0 40px rgb(255, 24, 24), 0 0 55px rgb(255, 24, 24), 0 0 75px rgb(255, 24, 24)"}}>404</Typography>
                    <Divider sx={{width:"100%", my:2}} />
                    <Typography variant="h1" sx={{textAlign:"center",textShadow:"0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px rgb(255, 24, 24), 0 0 30px rgb(255, 24, 24), 0 0 40px rgb(255, 24, 24), 0 0 55px rgb(255, 24, 24), 0 0 75px rgb(255, 24, 24)"}}>NOT FOUND</Typography>
                    <Divider sx={{width:"100%", my:2}} />
                    <Typography variant="h3" sx={{textShadow:"0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px rgb(255, 24, 24), 0 0 30px rgb(255, 24, 24), 0 0 40px rgb(255, 24, 24), 0 0 55px rgb(255, 24, 24), 0 0 75px rgb(255, 24, 24)"}}>GAME OVER</Typography>
                </Box>
            </Box>
        </Box>
    )
}
