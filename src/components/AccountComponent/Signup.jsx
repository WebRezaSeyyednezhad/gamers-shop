import React from "react";
import { Typography, Box, Card, Container, Divider, Button, IconButton, Tooltip, TextField, FormControl, FormControlLabel, Checkbox, FormLabel, FormHelperText} from "@mui/material";
import Header from "../../Header";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import GamesIcon from '@mui/icons-material/Games';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { NavLink } from "react-router";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
export default function Signup(){
    return(
        <Box>
            <Header />
            <Box sx={{width:"100%", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center", pt: 10 ,backgroundImage: "url('https://images8.alphacoders.com/134/thumb-1920-1343093.png')", backgroundPosition:"center"}}>
                <Card sx={{ width: {xs: "90%", lg: "30%"}, height: "85vh"}}>
                    <Box sx={{width:"100%", height:"10%", display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
                        <IconButton>
                            <SportsEsportsIcon color="primary"/>
                        </IconButton>
                        <IconButton>
                            <GamesIcon color="primary"/>
                        </IconButton>
                        <IconButton>
                            <VideogameAssetIcon color="primary"/>
                        </IconButton>
                    </Box>
                    <Divider />
                    <Box sx={{width:"100%", height:"90%", display:"flex", flexDirection:"column", justifyContent:"space-evenly", alignItems:"center", px:5, py:3}}>
                        <TextField variant="filled" label="Username" fullWidth sx={{my:0.5}}/>
                        <TextField variant="filled" label="Password" fullWidth sx={{my:0.5}}/>
                        <TextField variant="filled" label="Re-password" fullWidth sx={{my:0.5}}/>
                        <FormControl sx={{my:0.5}}>
                            <FormControlLabel control={<Checkbox />} label="I Agree to Privacy Policy"/>
                            <FormHelperText> By using this website you are agreeing to our Privacy Policy </FormHelperText>
                        </FormControl>
                        <Button variant="contained" fullWidth sx={{my:0.5}}>Submit</Button>
                        <NavLink to="/signin"><Button variant="text" color="info" fullWidth >Have an Account?</Button></NavLink>
                        <Divider sx={{width:"100%"}} />
                        <Button variant="outlined" color="error" fullWidth sx={{my:0.5}} startIcon={<GoogleIcon />}>Continue With Google</Button>
                        <Button variant="outlined" color="primary" fullWidth sx={{my:0.5}} startIcon={<FacebookIcon />}>Continue With Facebook</Button>
                    </Box>
                    <Divider />     
                </Card>
            </Box>
        </Box>
    )
}