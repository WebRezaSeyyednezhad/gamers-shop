import React from "react";
import { useState } from "react";
import { Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button, Divider,
} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function CardComponent({productName, productInfo, productPrice, productImage, onAddToCart}){
    return(
        <Card sx={{ maxWidth: 350 , margin: "auto", borderRadius: "5px", marginBottom: "20px" }} >
            <CardMedia
                component="img"
                height="240"
                image= {productImage}
                alt={productName}
            />
            <CardContent sx={{height:"180px"}}>
                <Typography gutterBottom variant="h6" color="primary" sx={{ textAlign: "center", textTransform: "capitalize"}}>
                    {productName}
                </Typography>
                <Divider sx={{mb:1}} />
                <Typography variant="caption" color="primary" sx={{textAlign: "center"}} >
                    {productInfo}
                </Typography>
            </CardContent>
            <Divider />
            <Box sx={{ height:"70px", display: "flex", flexWrap:"wrap", justifyContent:"space-evenly", alignItems:"center"}}>
                <CardActions sx={{display: "flex",justifyContent: "center"}}>
                    <Button color="primary" variant="outlined" onClick={onAddToCart} startIcon={<ShoppingCartIcon /> }>
                        Add to cart
                    </Button>
                </CardActions>
                <Typography variant="h6" fontWeight={800} sx={{textAlign: "center"}} color="primary">
                    ${productPrice}
                </Typography>
            </Box>
            
        </Card>
    )
}