// components/Sidebar.jsx
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Box,
    Typography,
  } from '@mui/material';
  
  import HomeIcon from '@mui/icons-material/Home';
  import SettingsIcon from '@mui/icons-material/Settings';
  import PsychologyIcon from '@mui/icons-material/Psychology';
  
  const drawerWidth = 240;
  
  const Sidebar = ({ open, onClose }) => {
    const menuItems = [
      { text: 'خانه', icon: <HomeIcon /> },
      { text: 'مدل‌های هوش مصنوعی', icon: <PsychologyIcon /> },
      { text: 'تنظیمات', icon: <SettingsIcon /> },
    ];
  
    return (
      <Drawer
        variant="temporary"
        open={open}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            منو
          </Typography>
          <Divider />
          <List>
            {menuItems.map((item, index) => (
              <ListItem button key={index}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    );
  };
  
  export default Sidebar;
  