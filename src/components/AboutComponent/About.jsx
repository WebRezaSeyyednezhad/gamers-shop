import React, {useState, useEffect} from "react";
import { Typography, Box, Accordion, AccordionDetails, AccordionSummary, Divider, Chip, IconButton, Tooltip, Card, CardHeader, CardMedia, CardContent, CardActions, Avatar} from "@mui/material";
import Header from "../../Header";
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import InfoIcon from '@mui/icons-material/Info';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function About(){
    return(
        <Box>
            <Header />
            <Box sx={{width:"100%", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center", pt: 12 ,backgroundImage: "url('https://images6.alphacoders.com/137/thumb-1920-1371030.png')", backgroundPosition:"center", backgroundAttachment:"fixed"}}>
                <Card sx={{width:{
                    xs: "90%",
                    lg: "30%"
                }}}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}   >
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="Reza" sx={{bgcolor:"gold"}}>
                                        R
                                    </Avatar>
                                }
                                title="Reza Seyyednezhad"
                                subheader="Front-end Developer / Chemical Engineer"
                            />
                        </AccordionSummary>
                        <AccordionDetails >
                            <CardContent>
                                <Accordion sx={{mb:1}}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography variant="span" gutterBottom color="primary"> ABOUT ME</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography variant="subtitle2" textAlign="justify" color="primary">Hi there! I'm glad you're here. I'm passionate about creating meaningful experiences whether through design, technology, or great products. With a curious mind and a drive to grow, I started this journey to share what I love with others. This space is a reflection of my creativity, dedication, and belief that even small ideas can make a big impact.</Typography>
                                        <Typography variant="subtitle2" color="primary">Thanks for stopping by your support means the world!</Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography variant="span" gutterBottom color="primary"> Skills </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Chip label="HTML/HTML5" variant="contained" sx={{m:0.3}} color="primary" size="small" />                                
                                        <Chip label="CSS/CSS3/SCSS" variant="contained" sx={{m:0.3}} color="primary" size="small" />                                
                                        <Chip label="BootStrap/TailwindCSS" variant="contained" sx={{m:0.3}} color="primary" size="small" />                                
                                        <Chip label="JavaScript/JQuery" variant="contained" sx={{m:0.3}} color="primary" size="small" />
                                        <Chip label="ReactJS/MUI" variant="contained" sx={{m:0.3}} color="primary" size="small" />
                                        <Chip label="Python" variant="contained" sx={{m:0.3}} color="primary" size="small" />
                                    </AccordionDetails>
                                </Accordion>
                            </CardContent>
                        </AccordionDetails>
                    </Accordion>
                    
                    <Divider />
                    <CardActions>
                        <Box sx={{width:"100%", display:"flex", justifyContent:"space-around", alignItems:"center0"}}>
                            <IconButton>
                                <InstagramIcon color="primary" />
                            </IconButton>
                            <IconButton>
                                <TelegramIcon color="primary" />
                            </IconButton>
                            <IconButton>
                                <LinkedInIcon color="primary" />
                            </IconButton>
                            <IconButton>
                                <GoogleIcon color="primary" />
                            </IconButton>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </Box>
    )
}