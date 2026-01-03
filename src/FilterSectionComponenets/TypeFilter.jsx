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
export default function TypeFilter({onChange}){
    const [typeSelected , setTypeSelected] = useState([])
    const types = [
        "Single Player", "Multiplayer", "Online", "Offline", "Free to Play", "Paid", "Browser-Based", "Downloadable", "Mobile", "PC", "Console", "VR", "Cross-Platform", "Co-op", "PvP", "PvE"
    ]
    const handleChange = (type) => (event) => {
    let updated = [];
    if (event.target.checked) {
        updated = [...typeSelected, type];
    } else {
        updated = typeSelected.filter(item => item !== type);
    }

    setTypeSelected(updated);
    onChange(updated); // اینجا پاس میدیم به بالا
    };    
    return(
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Accordion defaultExpanded={false}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography gutterBottom>Type</Typography>
                </AccordionSummary>
                <Divider />
                <AccordionDetails>
                    <FormGroup>
                        {types.map((itemType) => (
                            <FormControlLabel control={<Checkbox />} label={itemType.toUpperCase()} checked={typeSelected.includes(itemType)} onChange={handleChange(itemType)} />
                        ))}
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
        </Box>
                
    )
}