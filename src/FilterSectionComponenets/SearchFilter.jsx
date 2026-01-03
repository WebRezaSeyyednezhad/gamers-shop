import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
  Box,
  Divider
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';


export default function SearchFilter({onChange}){
    const [userSearch, setUserSearch] = useState("")
    const handleChange = (event) => {
        const searchInput = event.target.value;
        setUserSearch(searchInput)
        onChange(searchInput)
    }
    return(
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Accordion defaultExpanded={false}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography gutterBottom>Search Bar</Typography>
                </AccordionSummary>
                <Divider />
                <AccordionDetails>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" fullWidth label="Search the Game" variant="standard" onChange={handleChange}/>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}