import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormGroup,
  Typography,
  Box,
  Divider
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CheckBox } from '@mui/icons-material';

export default function BrandFilter({onChange}){
    const [selectedBrand, setSelectedBrand] = useState();

    const handleChange = (event) => {
        const brand = event.target.value;
        setSelectedBrand(brand);
        onChange(brand); // ارسال به ProductFilter.jsx
    };
    return(
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Accordion defaultExpanded={false}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography gutterBottom>Company</Typography>
                </AccordionSummary>
                <Divider />
                <AccordionDetails>
                    <FormGroup>
                        <RadioGroup value={selectedBrand} onChange={handleChange}>
                            {
                                ["UBISOFT", "FROMSOFTWARE", "ROCKSTAR", "CAPCOM", "SONY", "EA", "KONAMI", "ACTIVISION"].map((comp) => (
                                    <FormControlLabel key={comp} value={comp} control={<Radio />} label={comp} />
                                ))
                            }
                        </RadioGroup>
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
        </Box>
        
    )
}