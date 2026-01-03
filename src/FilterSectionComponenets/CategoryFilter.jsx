import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
  Box,
  Divider
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CategoryFilter({onChange}){
    const [cateSelected , setCateSelected] = useState([])
        const handleChange = (category) => (event) => {
        let updated = [];
        if (event.target.checked) {
            updated = [...cateSelected, category];
        } else {
            updated = cateSelected.filter(item => item !== category);
        }
    
        setCateSelected(updated);
        onChange(updated); // اینجا پاس میدیم به بالا
        };  
    return(
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Accordion defaultExpanded={false}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography gutterBottom>Category</Typography>
                </AccordionSummary>
                <Divider />
                <AccordionDetails>
                    <FormGroup>
                        {["Action", "Adventure", "RPG", "Strategy", "Simulation", "Sports", "Racing", "Puzzle", "Shooter", "Fighting", "Horror", "Platformer", "Casual", "Arcade"].map((itemCategory) => (
                            <FormControlLabel control={<Checkbox />} label={itemCategory.toUpperCase()} checked={cateSelected.includes(itemCategory)} onChange={handleChange(itemCategory)} />
                        ))}
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
        </Box>
        
    )
}