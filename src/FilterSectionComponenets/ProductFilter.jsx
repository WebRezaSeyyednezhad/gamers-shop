import React, {useState} from 'react';
import { Box, Typography, Divider, Button, Card } from '@mui/material';
import TypeFilter from './TypeFilter';
import BrandFilter from './BrandFilter';
import CategoryFilter from './CategoryFilter';
import SearchFilter from './SearchFilter';

export default function ProductFilter({onSubmit}){
    const [searchingInput , setSearchingInput] = useState(null)
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedType , setSelectedType] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        const filters = {
            searches: searchingInput,
            brands: selectedBrand,
            categories: selectedCategory,
            type: selectedType,
        };
        onSubmit(filters);
    };
    return(
        <Card sx={{display: "flex", flexDirection:"column", alignItems:"center", width:"100%", p:2}} gap={1}>
            <Typography variant="h4" pb={4} color="primary">Filtering</Typography>
            <SearchFilter onChange={setSearchingInput} />
            <BrandFilter onChange={setSelectedBrand} />
            <CategoryFilter onChange={setSelectedCategory} />
            <TypeFilter onChange={setSelectedType} />
            <Divider />
            <Button button variant="contained" sx={{width:"100%"}} onClick={handleSubmit}>Submit</Button>
        </Card>
    )
}