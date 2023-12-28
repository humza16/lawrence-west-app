import React from "react";
import { Link, useLocation } from "react-router-dom";
import { TextField, Stack, Button, IconButton, Badge, Avatar, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { styled } from '@mui/material/styles'
import Logo from "assets/logos/Logo";
import Carousel from "assets/images/Carousel.png";
import { appBlackcolor } from "theme/colors";

const SearchInput = styled(TextField)(() => ({
  "& .MuiInput-root": {
    backgroundColor: '#F3F6FA !important',
    padding: '8px 12px',
    gap: '8px',
    ":before": {
      borderBottom: 'none!important'
    },
    ":after": {
      borderBottom: 'none!important'
    }
  }
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  fontWeight: 500,
  '&:hover': {
    color: theme.palette.primary.main
  }
}));

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== '/onboarding' ? <Stack p={2} height='60px' border='1px solid #E6F0FF'>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Stack direction='row' alignItems="center" spacing={3}>
            <Logo width="199" height="41" />
            <StyledLink to="/">Moment Library</StyledLink>
            <StyledLink to="/">QR Library</StyledLink>
            <SearchInput variant="standard" name="search" type="text" InputProps={{ startAdornment: (<SearchIcon sx={{ rotate: '90deg' }} />) }} />
          </Stack>
          <Stack direction='row' spacing={2} alignItems='center'>
            <Button size="large" variant="contained" startIcon={<AddIcon />}>Create moment</Button>
            <IconButton sx={{ color: appBlackcolor }}> <SettingsOutlinedIcon /> </IconButton>
            <Badge badgeContent={4} color="primary">
              <NotificationsNoneOutlinedIcon />
            </Badge>
            <IconButton sx={{ color: appBlackcolor }}> <HelpOutlineOutlinedIcon /> </IconButton>
            <Avatar src={Carousel} alt="avatar" />
          </Stack>
        </Stack>
      </Stack> : null}
      <Box>
        {children}
      </Box>
    </>
  );
};

export default Layout;
