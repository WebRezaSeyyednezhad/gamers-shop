import React from "react";
import { Container, Box, Typography, Button, Grid, AppBar, Toolbar, IconButton, Badge } from "@mui/material";
import CardComponent from "./components/MUICardComponent/CardComponent";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from "react";
import Header from "./Header";
import ProductFilter from "./FilterSectionComponenets/ProductFilter";
export default function Playground(){
    const [userCartItemsNumber , setUserCartItemsNumber] =  useState(0)
    const handleAddToCart = () => {
        setUserCartItemsNumber(prev => prev + 1);
    };
    const gameList = [
        {
            "gameId": 1,
            "gameName": "Red Dead Redemption 2",
            "gameInfo": "An epic tale of life in America’s unforgiving heartland. Developed by Rockstar, it's a mix of story, exploration, and action in an open-world western.",
            "gameImage": "https://wallpapercave.com/wp/wp2205125.jpg",
            "gamePrice": "59.99"
        },
        {
            "gameId": 2,
            "gameName": "The Witcher 3: Wild Hunt",
            "gameInfo": "A story-driven open world RPG set in a visually stunning fantasy universe full of meaningful choices and impactful consequences.",
            "gameImage": "https://wallpapercave.com/wp/wp6511576.jpg",
            "gamePrice": "39.99"
        },
        {
            "gameId": 3,
            "gameName": "Stardew Valley",
            "gameInfo": "Farming, mining, relationships, and cozy vibes in a pixelated countryside. A relaxing simulation RPG.",
            "gameImage": "https://wallpapercave.com/wp/wp2234186.jpg",
            "gamePrice": "14.99"
        },
        {
            "gameId": 4,
            "gameName": "DOOM Eternal",
            "gameInfo": "High-octane first-person shooter where you battle demons with a wide arsenal. Developed by id Software.",
            "gameImage": "https://wallpapercave.com/wp/wp4400596.jpg",
            "gamePrice": "59.99"
        },
        {
            "gameId": 5,
            "gameName": "Cyberpunk 2077",
            "gameInfo": "An open-world RPG set in a dystopian future. Explore Night City and customize your cybernetic enhancements.",
            "gameImage": "https://wallpapercave.com/wp/wp15445510.png",
            "gamePrice": "59.99"
        },
        {
            "gameId": 6,
            "gameName": "FIFA 24",
            "gameInfo": "The latest entry in EA Sports' football franchise, featuring updated rosters, graphics, and online modes.",
            "gameImage": "https://wallpapercave.com/wp/wp11884019.jpg",
            "gamePrice": "69.99"
        },
        {
            "gameId": 7,
            "gameName": "Minecraft",
            "gameInfo": "A sandbox game where you can build anything you imagine, explore endless worlds, and survive the wilderness.",
            "gameImage": "https://wallpapercave.com/wp/wp8484597.jpg",
            "gamePrice": "26.95"
        },
        {
            "gameId": 8,
            "gameName": "Resident Evil Village",
            "gameInfo": "The 8th main entry in the horror franchise. A mix of survival horror and action in a mysterious village.",
            "gameImage": "https://wallpapercave.com/wp/wp8737802.png",
            "gamePrice": "39.99"
        },
        {
            "gameId": 9,
            "gameName": "Terraria",
            "gameInfo": "A 2D sandbox game that lets you dig, build, fight, and explore with infinite possibilities.",
            "gameImage": "https://wallpapercave.com/wp/wp2233411.jpg",
            "gamePrice": "9.99"
        },
        {
            "gameId": 10,
            "gameName": "God of War (2018)",
            "gameInfo": "A narrative-driven action game where Kratos embarks on a journey with his son in Norse mythology.",
            "gameImage": "https://wallpapercave.com/wp/wp2680059.jpg",
            "gamePrice": "49.99"
        },
        {
            "gameId": 11,
            "gameName": "Among Us",
            "gameInfo": "A multiplayer party game of teamwork and betrayal. Unmask the impostors aboard a spaceship.",
            "gameImage": "https://wallpapercave.com/wp/wp8821071.jpg",
            "gamePrice": "4.99"
        },
        {
            "gameId": 12,
            "gameName": "Hogwarts Legacy",
            "gameInfo": "An open-world RPG set in the Harry Potter universe during the 1800s. Attend classes and explore magical mysteries.",
            "gameImage": "https://wallpapercave.com/wp/wp8172984.jpg",
            "gamePrice": "59.99"
        },
        {
            "gameId": 13,
            "gameName": "Forza Horizon 5",
            "gameInfo": "A high-speed racing game set in an open-world Mexico. Features hundreds of cars and dynamic seasons.",
            "gameImage": "https://wallpapercave.com/wp/wp9351519.jpg",
            "gamePrice": "59.99"
        },
        {
            "gameId": 14,
            "gameName": "Far Cry 3",
            "gameInfo": "An open-world FPS game set on a tropical island full of chaos, pirates, and insanity. You play as Jason Brody, trying to rescue your friends and survive.",
            "gameImage": "https://wallpapercave.com/wp/wp1843175.jpg",
            "gamePrice": "19.99"
        },
        {
            "gameId": 15,
            "gameName": "Far Cry 4",
            "gameInfo": "Set in the fictional Himalayan region of Kyrat, you play as Ajay Ghale caught in a civil war against a despotic king. Features elephants and wingsuits!",
            "gameImage": "https://wallpapercave.com/wp/wp1833957.jpg",
            "gamePrice": "29.99"
        },
        {
            "gameId": 16,
            "gameName": "Far Cry Primal",
            "gameInfo": "Travel back to the Stone Age and play as Takkar, a hunter trying to unite tribes and survive in a savage world without guns—only spears and beasts.",
            "gameImage": "https://wallpapercave.com/wp/wp1896897.jpg",
            "gamePrice": "29.99"
        },
        {
            "gameId": 17,
            "gameName": "Far Cry 5",
            "gameInfo": "Set in rural Montana, USA, you must confront a fanatical doomsday cult. Huge open-world with co-op gameplay and vehicle combat.",
            "gameImage": "https://wallpapercave.com/wp/wp2533541.jpg",
            "gamePrice": "59.99"
        },
        {
            "gameId": 18,
            "gameName": "Far Cry New Dawn",
            "gameInfo": "A standalone sequel to Far Cry 5, set in a post-apocalyptic version of the same world. Fight against raiders and build your home base.",
            "gameImage": "https://wallpapercave.com/wp/wp3973735.jpg",
            "gamePrice": "39.99"
        },
        {
            "gameId": 19,
            "gameName": "Far Cry 6",
            "gameInfo": "Set in the fictional Caribbean island of Yara, ruled by a dictator. You play as Dani Rojas, a guerrilla fighting for freedom with makeshift weapons and amigos.",
            "gameImage": "https://wallpapercave.com/wp/wp9842536.jpg",
            "gamePrice": "59.99"
        }
    ]
    const [filters, setFilters] = useState({
        searches:null,
        brands: null,
        categories: null,
        type: null,
    });

    const handleFilterSubmit = (newFilters) => {
        console.log("Filters submitted:", newFilters);
        setFilters(newFilters); 
        // alert(`searches: ${filters.searches}\nbrands: ${filters.brands}\ncategories: ${filters.categories}\ntype: ${filters.type}`)
    };
    const filteredGames = gameList.filter(game => {
        const brandMatch = !filters.brands || game.gameName.toUpperCase().includes(filters.brands);
        const categoryMatch = !filters.categories || filters.categories.some(cat => game.gameName.toUpperCase().includes(cat));
        const typeMatch = !filters.type || filters.type.some(t => game.gameName.toUpperCase().includes(t));
        return brandMatch && categoryMatch && typeMatch;
    });
    return(
        <Box sx={{backgroundImage: "url('https://images.alphacoders.com/133/thumb-1920-1331897.jpeg')", backgroundPosition:"center", backgroundAttachment:"fixed"}}>
            <Header userCartItemsNumber={userCartItemsNumber} />
            <Box sx={{ pt: 12, alignItems:"center", }} >
                
                <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"center", alignItems:"flex-start"}} gap={1}>
                    <Grid container spacing={3} p={2} justifyContent='center' alignItems='center' sx={{width: {xs: "100%", lg: "20%" },borderRadius:"1rem", boxShadow:"0px 0px 100px 40px rgba(0,0,0,0.1)"}}>
                        <ProductFilter
                            onSubmit={handleFilterSubmit}
                        />
                    </Grid>
                    <Grid container spacing={3} justifyContent='center' alignItems='center' sx={{width: {xs: "100%", lg: "70%" }, position:"relative"}}>
                        { gameList.map((game) => {
                            return(
                                <Grid item xs={12} sm={6} md={4} lg={3} key={game.gameId} >
                                    <CardComponent productName={game.gameName} productPrice={game.gamePrice} productImage={game.gameImage} productInfo={game.gameInfo} onAddToCart={handleAddToCart} />
                                </Grid>
                            )
                        })}
                    </Grid>
                    
                </Box>
                
            </Box>
            
            {/* <Box sx={{ padding: 3, bgcolor: "#f0f0f0", borderRadius: 2, display:"flex", flexWrap:"wrap" }}>
                { gameList.map((game) => {
                    return(
                        <CardComponent key={game.gameId} productName={game.gameName} productPrice={game.gamePrice} productImage={game.gameImage} productInfo={game.gameInfo} />
                    )
                })}
                
            </Box> */}

            
        </Box>
    )
}