import React from "react";
import { Typography, Box, Button, Divider, Card, CardMedia, CardContent, CardActions } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
export default function CartItemComponent({itemImage, itemTitle, itemCount, itemCost}){
    return(
        <Card sx={{width:"100%", height:"300",mb:"10px", display:"flex", flexWrap:"wrap", p:"10px", flexDirection:{
            xs:"column", lg:"row"
        }}}>
            <CardMedia sx={{width:{
                xs:"100%", lg:"30%"
            }}} component="img" height="150" title="" image={itemImage} />
            <Divider orientation="horizontal"></Divider>
            <CardContent sx={{display:"flex", flexDirection:"column" , justifyContent:"space-evenly", alignItems:"center", width:{
                xs:"100%", lg:"55%"
            }}}>
                <Typography gutterBottom variant="h6" color="primary" sx={{ textAlign: "center", textTransform: "capitalize"}}>
                    {itemTitle}
                </Typography>
                <Typography gutterBottom variant="body1" color="primary" sx={{ textAlign: "center", textTransform: "capitalize"}}>
                    Count: {itemCount}
                </Typography>
                <Typography gutterBottom variant="h6" color="primary" sx={{ textAlign: "center", fontWeight:"900"}}>
                    Cost: {itemCost}
                </Typography>
            </CardContent>
            <Divider orientation="horizontal"></Divider>
            <Box sx={{width:{
                xs:"100%", lg:"15%"
            }, display:"flex", flexDirection:"column", justifyContent:"space-evenly", alignItems:"center"}}>
                <Button startIcon={<EditIcon />} sx={{my:1}} variant="outlined" fullWidth size="small">Edit</Button>
                <Button startIcon={<DeleteIcon />} sx={{my:1}} variant="outlined" fullWidth size="small">Delete</Button>
                <Button startIcon={<CheckIcon />} sx={{my:1}} variant="contained" color="success" fullWidth size="small">Submit</Button>
            </Box>
        </Card>
    )
}