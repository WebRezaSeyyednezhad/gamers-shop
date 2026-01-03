import { AppBar, Toolbar, Typography, IconButton, Switch, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header({ mode, toggleMode, onMenuClick }) {
  return (
    <AppBar position="fixed" color="primary" elevation={1}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* دکمه باز کردن سایدبار */}
        <IconButton color="inherit" edge="start" onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>

        {/* عنوان */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          داشبورد هوش مصنوعی
        </Typography>

        {/* سوییچ حالت دارک/لایت */}
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="body2">{mode === 'dark' ? 'تاریک' : 'روشن'}</Typography>
          <Switch checked={mode === 'dark'} onChange={toggleMode} color="default" />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;