import React, {useState, useEffect} from "react";
import { Typography, Box, Container, Divider, Button, IconButton, Tooltip} from "@mui/material";
import Header from "../../Header";
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SquareIcon from '@mui/icons-material/Square';
import { NavLink } from "react-router";

export default function Home(){
    return(
        <Box>
            <Header />
            <Box sx={{width:"100%", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center", pt: 15 ,backgroundImage: "url('https://images3.alphacoders.com/136/thumb-1920-1364877.png')", backgroundPosition:"center"}}>
                {/* <Container maxWidth="md" sx={{backdropFilter:"blur(15px)", p:2, borderRadius:"0.3rem"}}>
                    <Typography variant="h4" color="primary" textAlign="center">Welcome to </Typography>
                    <Typography variant="h3" color="primary" textAlign="center"fontWeight={900} >REXIDRO SHOP</Typography>
                    <Divider sx={{my:3}} />
                    <Box sx={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
                        <IconButton size="large" color="primary">
                            <SportsEsportsIcon />
                        </IconButton>
                        <IconButton size="large" color="primary">
                            <GamepadIcon />
                        </IconButton>
                        <IconButton size="large" color="primary">
                            <VideogameAssetIcon />
                        </IconButton>
                        <IconButton size="large" color="primary">
                            <SportsEsportsIcon />
                        </IconButton>
                        <IconButton size="large" color="primary">
                            <GamepadIcon />
                        </IconButton>
                        <IconButton size="large" color="primary">
                            <VideogameAssetIcon />
                        </IconButton>
                        <IconButton size="large" color="primary">
                            <SportsEsportsIcon />
                        </IconButton>
                        <IconButton size="large" color="primary">
                            <GamepadIcon />
                        </IconButton>
                        <IconButton size="large" color="primary">
                            <VideogameAssetIcon />
                        </IconButton>
                        <IconButton size="large" color="primary">
                            <SportsEsportsIcon />
                        </IconButton>
                        <IconButton size="large" color="primary">
                            <GamepadIcon />
                        </IconButton>
                        <IconButton size="large" color="primary">
                            <VideogameAssetIcon />
                        </IconButton>
                        <IconButton size="large" color="primary">
                            <SportsEsportsIcon />
                        </IconButton>
                        <IconButton size="large" color="primary">
                            <GamepadIcon />
                        </IconButton>
                        <IconButton size="large" color="primary">
                            <VideogameAssetIcon />
                        </IconButton>
                    </Box>
                    <Divider sx={{my:3}} />
                    <Typography variant="h4" color="primary" textAlign="center" sx={{textShadow:"4px 7px 8px #EFA133;", fontWeight:"900"}}>
                        Shop the best products, delivered with care.
                    </Typography>
                    <Divider sx={{my:4}} />
                    <Button size="large" variant="contained" fullWidth startIcon={ <GamepadIcon fontSize="large" /> } endIcon={<GamepadIcon fontSize="large" />}>
                        <Typography variant="h6" textAlign="center">
                            Discover the Shop
                        </Typography>
                    </Button>
                    <Divider sx={{my:4}} />
                    <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <Box>
                            <IconButton color="primary">
                                <SportsEsportsIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{display:"flex", justifyContent:"space-between"}}>
                            <Tooltip title="Instagram" arrow>
                                <Button variant="contained" aria-label="Instagram" color="primary" sx={{mx:1}}>
                                    <InstagramIcon />
                                </Button>
                            </Tooltip>
                            <Tooltip title="Telegram" arrow>
                                <Button variant="contained" aria-label="Telegram" color="primary" sx={{mx:1}}>
                                    <TelegramIcon />
                                </Button>
                            </Tooltip>
                            <Tooltip title="YouTube" arrow>
                                <Button variant="contained" aria-label="YouTube" color="primary" sx={{mx:1}}>
                                    <YouTubeIcon />
                                </Button>
                            </Tooltip>
                            <Tooltip title="X" arrow>
                                <Button variant="contained" aria-label="X" color="primary" sx={{mx:1}}>
                                    <XIcon />
                                </Button>
                            </Tooltip>
                            
                            
                            
                        </Box>
                        <Box>
                            <IconButton color="primary">
                                <SportsEsportsIcon />
                            </IconButton>
                        </Box>
                    </Box>
                    <Divider sx={{my:4}} />
                    <Typography variant="caption" color="primary">Created by Reza Seyyednezhad</Typography>
                </Container> */}
                <Box sx={{width: "90%", height:{lg:"70vh", xs:"80vh"} , backdropFilter:"blur(25px)", p:2, borderRadius:{lg:"50%", xs:"20%"}, display:"flex", justifyContent:"center", alignItems:"center", flexDirection:{xs:"column", lg:"row"}}}>
                    <Box sx={{width:"15%", height:"100%", display:{lg:"flex", xs:"none"}, flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                        <Box sx={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <IconButton color="primary">
                                <SquareIcon fontSize="large"/>
                            </IconButton>
                        </Box>
                        <Box sx={{width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                            <IconButton color="primary">
                                <SquareIcon fontSize="large"/>
                            </IconButton>
                            <IconButton color="primary">
                                <SquareIcon fontSize="large"/>
                            </IconButton>
                        </Box>
                        <Box sx={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <IconButton color="primary">
                                <SquareIcon fontSize="large"/>
                            </IconButton>
                        </Box>
                    </Box>
                    <Box sx={{width:{lg:"70%", xs:"100%"}, height:"100%", display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center"}}>
                        {/* <Typography variant="h4" color="primary">WELCOME</Typography>
                        <Divider style={{width:"100%"}} /> */}
                        <Typography variant="h3" fontWeight={900} color="primary">GAMERS SHOP</Typography>
                        <Divider style={{width:"100%"}} />
                        <Typography variant="h6" color="primary">We can’t change what’s done. We can only move on. <br /> "Arthur Morgan"</Typography>
                        <Divider style={{width:"100%"}} />
                        <NavLink to="/shop">
                            <Button variant="contained" color="primary" size="large" startIcon={<PlayArrowIcon />}>Let's Shopping</Button>
                        </NavLink>
                        <Divider style={{width:"100%"}} />
                        <Typography variant="caption" color="primary" sx={{display:"flex", alignItems:"center", justifyContent:"center"}}> Created By Reza Seyyednezhad</Typography>
                    </Box>
                    <Box sx={{width:{lg:"15%", xs:"100%"}, height:{lg: "100%", xs:"20%"}, display:"flex", flexDirection:{lg:"column", xs:"row"}, justifyContent:"center", alignItems:"center"}}>
                        <Box sx={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <Tooltip title="Instagram" placement="top">
                                <IconButton color="primary" href="#">
                                    <InstagramIcon fontSize="large" />
                                </IconButton>
                            </Tooltip>
                            
                        </Box>
                        <Box sx={{width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                            <Tooltip title="X" placement="left">
                                <IconButton color="primary" href="#">
                                    <XIcon fontSize="large" />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Telegram" placement="right">
                                <IconButton color="primary" href="#">
                                <TelegramIcon fontSize="large" />
                            </IconButton>
                            </Tooltip>
                        </Box>
                        <Box sx={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <Tooltip title="YouTube" placement="bottom">
                                <IconButton color="primary" href="#">
                                    <YouTubeIcon fontSize="large" />
                                </IconButton>
                            </Tooltip>
                            
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}