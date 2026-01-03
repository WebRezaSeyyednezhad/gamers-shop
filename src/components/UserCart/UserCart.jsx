import React from "react";
import { Container, Box, Typography, Button, Card, Grid, AppBar, Toolbar, IconButton, Badge, TextField, Divider } from "@mui/material";
import Header from "../../Header";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CartItemComponent from "./CartItemComponent";
export default function UserCart(){
    return(
        <Box sx={{backgroundImage: "url('https://images6.alphacoders.com/130/thumb-1920-1309409.jpg')", backgroundPosition:"center", backgroundSize:"cover", backgroundAttachment:"fixed"}}>
            <Header />
            <Box sx={{pt: 12, width:"100%"}}>
                <Box sx={{display:"flex", justifyContent:"center",textAlign:"center", mb:"10px", alignItems:"center"}} gap={1}>
                    <LocalMallIcon color="primary" />
                    <Typography variant="h5" color="primary" > My Cart </Typography>
                </Box>
                <Divider/>
                <Box sx={{display:"flex", width:"100%", flexWrap:"wrap", justifyContent:"space-evenly", alignItems:"flex-start", mt:"20px"}}>
                    <Box sx={{width:{
                        xs: "100%",
                        lg: "60%"
                    }, textAlign: "center", minHeight: "60lvh", borderRadius:"0.3rem", mb:"10px"}}>
                        <Container maxWidth="lg">
                            <CartItemComponent itemImage="https://wallpapercave.com/wp/wp11695146.png" itemCount="1" itemTitle="Red Dead Redemption 2" itemCost="59.99" />
                            <Divider orientation="horizontal" sx={{my:2}}></Divider>
                            {/* <CartItemComponent itemImage="https://wallpapercave.com/wp/wp4547452.jpg" itemCount="1" itemTitle="Sekiro: Shadow Dies Twice" itemCost="59.99" />
                            <Divider orientation="horizontal" sx={{my:2}}></Divider>
                            <CartItemComponent itemImage="https://wallpapercave.com/wp/wp2164694.jpg" itemCount="1" itemTitle="Far Cry 5" itemCost="59.99" />
                            <Divider orientation="horizontal" sx={{my:2}}></Divider>
                            <CartItemComponent itemImage="https://wallpapercave.com/wp/wp11695146.png" itemCount="1" itemTitle="Red Dead Redemption 2" itemCost="59.99" />
                            <Divider orientation="horizontal" sx={{my:2}}></Divider>
                            <CartItemComponent itemImage="https://wallpapercave.com/wp/wp4547452.jpg" itemCount="1" itemTitle="Sekiro: Shadow Dies Twice" itemCost="59.99" />
                            <Divider orientation="horizontal" sx={{my:2}}></Divider>
                            <CartItemComponent itemImage="https://wallpapercave.com/wp/wp2164694.jpg" itemCount="1" itemTitle="Far Cry 5" itemCost="59.99" />
                            <Divider orientation="horizontal" sx={{my:2}}></Divider>
                            <CartItemComponent itemImage="https://wallpapercave.com/wp/wp11695146.png" itemCount="1" itemTitle="Red Dead Redemption 2" itemCost="59.99" />
                            <Divider orientation="horizontal" sx={{my:2}}></Divider>
                            <CartItemComponent itemImage="https://wallpapercave.com/wp/wp4547452.jpg" itemCount="1" itemTitle="Sekiro: Shadow Dies Twice" itemCost="59.99" />
                            <Divider orientation="horizontal" sx={{my:2}}></Divider>
                            <CartItemComponent itemImage="https://wallpapercave.com/wp/wp2164694.jpg" itemCount="1" itemTitle="Far Cry 5" itemCost="59.99" /> */}
                        </Container>
                    </Box>

                    <Card sx={{width:{
                        xs: "100%",
                        lg: "25%"
                    }, textAlign: "center", minHeight: "60lvh", display:"flex", flexDirection:"column", mb:5, p:5}}>
                        <Box sx={{width:"100%"}}>
                            <TextField fullWidth variant="outlined" label="Enter Promo Code" size="small" sx={{mb:"10px"}}/>
                            <Button variant="outlined" size="medium" fullWidth>Submit Promo Code</Button>
                        </Box>
                        <Divider style={{width:'100%'}} sx={{my:3}} />
                        <Box>
                            <Box sx={{width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center", my:1.5}}>
                                <Typography variant="body1" color="info">Shopping Cost</Typography>
                                <Typography variant="body1" color="primary">$39.99</Typography>
                            </Box>
                            <Box sx={{width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center", my:1.5}}>
                                <Typography variant="body1" color="info">Discount</Typography>
                                <Typography variant="body1" color="primary">-0$</Typography>
                            </Box>
                            <Box sx={{width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center", my:1.5}}>
                                <Typography variant="body1" color="info">Tax</Typography>
                                <Typography variant="body1" color="primary">TBD</Typography>
                            </Box>
                            <Divider style={{width:'100%'}} sx={{my:3}} />
                            <Box sx={{width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center", my:1.5}}>
                                <Typography variant="h6" color="info">Total</Typography>
                                <Typography variant="h6" color="primary">$39.99</Typography>
                            </Box>
                            <Divider style={{width:'100%'}} sx={{my:3}} />
                            <Box sx={{width:"100%"}}>
                                <Button fullWidth variant="contained" sx={{mb:2}}>Checkout</Button>
                                <Button fullWidth variant="outlined">PayPal</Button>
                            </Box>
                        </Box>
                    </Card>
                </Box>
            </Box>
        </Box>
    )
}