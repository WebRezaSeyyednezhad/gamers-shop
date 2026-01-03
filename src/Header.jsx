import React from "react";
import { Container,ButtonGroup, Divider, Box, Typography, Button, Menu, MenuItem, AppBar, Toolbar, IconButton, Badge, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from "react";
import { NavLink } from "react-router";

export default function Header({userCartItemsNumber}){
    const [activeHeaderLink, setActiveHeaderLink] = useState("Home")
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <Container maxWidth="lg">
            <AppBar position="fixed" color="primary">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h5" color="primary" sx={{textShadow:"4px 7px 8px #EFA133;", fontWeight:"700"}}>
                    GAMERS SHOP
                </Typography>
                {
                    isMobile ? (
                        <>
                            <Box gap={1} sx={{display: "flex"}}>
                                <Box gap={5}>
                                    <NavLink to="/user-cart">
                                        <IconButton color="primary" variant="outlined" sx={{mx:2}}>
                                            <Badge badgeContent={userCartItemsNumber} color="error">
                                                <ShoppingCartIcon />
                                            </Badge>
                                        </IconButton>
                                    </NavLink>
                                    <IconButton
                                        variant="outlined" 
                                        color="primary" id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}>
                                        <AccountCircleIcon />
                                    </IconButton>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        slotProps={{
                                        list: {
                                            'aria-labelledby': 'basic-button',
                                        },
                                        }}>
                                            <MenuItem><Typography variant="h6">Account</Typography></MenuItem>
                                            <Divider />
                                            <MenuItem onClick={handleClose} sx={{width:"100%"}}>
                                                <ButtonGroup variant="contained" aria-label="Basic button group">
                                                    <NavLink to="/signin"><Button>Sign in</Button></NavLink>
                                                    <NavLink to="/signup"><Button>Sign up</Button></NavLink>
                                                </ButtonGroup>
                                            </MenuItem>
                                            
                                    </Menu>
                                </Box>
                                <IconButton aria-label="hamburgerIcon" onClick={()=>setIsDrawerOpen(true)}>
                                    <MenuIcon color="primary" />
                                </IconButton>
                                
                            </Box>
                            <Drawer
                                variant="temporary"
                                anchor="right"
                                
                                open={isDrawerOpen}
                                onClose={() => {setIsDrawerOpen(false)}}
                            >
                                <Box sx={{ width: 250 }} role="presentation" onClick={()=>{setIsDrawerOpen(false)}}>
                                    <List>
                                        <ListItem>
                                            <Typography variant="h6" sx={{textShadow:"4px 7px 8px #EFA133;", fontWeight:"900"}}>
                                                GAMERS SHOP
                                            </Typography>
                                        </ListItem>
                                        
                                        <NavLink to="/">
                                            <ListItem button>                                                    
                                                <Box sx={{display: "flex"}} gap={1}>
                                                    <Typography variant="h5" color="primary"><HomeIcon /></Typography>
                                                    <Typography variant="caption" color="primary"><ListItemText primary="Home" /></Typography>
                                                </Box>
                                            </ListItem>
                                        </NavLink>
                                        <NavLink to="/shop">
                                            <ListItem button>                                                    
                                                <Box sx={{display: "flex"}} gap={1}>
                                                    <Typography variant="h5" color="primary"><ShoppingBagIcon /></Typography>
                                                    <Typography variant="caption" color="primary"><ListItemText primary="Shop"/></Typography>
                                                </Box>
                                            </ListItem>
                                        </NavLink>
                                        <NavLink to="/about">
                                            <ListItem button>                                                    
                                                <Box sx={{display: "flex"}} gap={1}>
                                                    <Typography variant="h5" color="primary"><InfoIcon /></Typography>
                                                    <Typography variant="caption" color="primary"><ListItemText primary="About"/></Typography>
                                                </Box>
                                            </ListItem>
                                        </NavLink>
                                        <Divider />
                                    </List>
                                    
                                </Box>
                            </Drawer>
                        </>
                    ):(
                        <>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                
                                <NavLink to="/">
                                    <Button variant="outlined" sx={{display: "flex"}} gap={1}>
                                        <Typography variant="caption" color="primary"><ListItemText primary="Home" /></Typography>
                                    </Button>
                                </NavLink>
                                
                                <NavLink to="/shop">
                                    <Button variant="outlined" sx={{display: "flex"}} gap={1}>
                                        <Typography variant="caption" color="primary"><ListItemText primary="Shop" /></Typography>
                                    </Button>
                                </NavLink>

                                <NavLink to="/about">
                                    <Button variant="outlined" sx={{display: "flex"}} gap={1}>
                                        <Typography variant="caption" color="primary"><ListItemText primary="About" /></Typography>
                                    </Button>
                                </NavLink>
                                
                                
                            </Box>
                            <Box gap={5}>
                                <NavLink to="/user-cart">
                                    <IconButton color="primary" variant="outlined" sx={{mx:2}}>
                                        <Badge badgeContent={userCartItemsNumber} color="error">
                                            <ShoppingCartIcon />
                                        </Badge>
                                    </IconButton>
                                </NavLink>
                                <IconButton 
                                    variant="outlined" 
                                    color="primary" id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}>
                                    <AccountCircleIcon />
                                </IconButton>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    slotProps={{
                                    list: {
                                        'aria-labelledby': 'basic-button',
                                    },
                                    }}>
                                        <MenuItem><Typography variant="h6">Account</Typography></MenuItem>
                                        <Divider />
                                        <MenuItem onClick={handleClose} sx={{width:"100%"}}>
                                                <ButtonGroup variant="contained" aria-label="Basic button group">
                                                    <NavLink to="/signin"><Button>Sign in</Button></NavLink>
                                                    <NavLink to="/signup"><Button>Sign up</Button></NavLink>
                                                </ButtonGroup>
                                        </MenuItem>
                                </Menu>
                            </Box>
                        </>
                    )
                }
                
                </Toolbar>
            </AppBar>
        </Container>
    )
}