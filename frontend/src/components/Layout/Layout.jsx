import React from "react";
import { Link, useLocation } from "react-router-dom";
import { TextField, Stack, Button, IconButton, Badge, useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import { styled } from '@mui/material/styles'
import Logo from "assets/logos/Logo";
import { appBlackcolor } from "theme/colors";
import UserDropDown from "components/UserDropDown";
import Sidebar from "./Sidebar";


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

const roundBorder = { border: "#E1E1E6 solid 2px", borderRadius: "50%" };

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const isMobile = useMediaQuery('(max-width:900px)');

  return (
    <>
      {pathname !== '/onboarding' ? isMobile ?
        <Sidebar />

        : <Stack p={2} border='1px solid #E6F0FF'>
          <Stack direction='row' justifyContent='space-between' alignItems='center'>
            {/* <Stack direction='row' alignItems="center" spacing={3}> */}
            <Link to='/home'><Logo width="199" height="41" /></Link>
            {/* <StyledLink to="/">Moment Library</StyledLink>
              <StyledLink to="/">QR Library</StyledLink>
              <SearchInput variant="standard" name="search" type="text" InputProps={{ startAdornment: (<SearchIcon sx={{ rotate: '90deg' }} />) }} /> */}
            {/* </Stack> */}
            <Stack direction='row' spacing={2} alignItems='flex-start'>
              <Button size="large" sx={{ borderRadius: "100px!important" }} variant="contained" startIcon={<VideoCameraFrontIcon />} >Create moment</Button>
              <IconButton sx={{ color: appBlackcolor, ...roundBorder }} > <SettingsOutlinedIcon /> </IconButton>
              <Badge color="primary" >
                <NotificationsNoneOutlinedIcon sx={{ ...roundBorder, padding: 1 }} />
              </Badge>
              <IconButton sx={{ color: appBlackcolor, ...roundBorder }}> <HelpOutlineOutlinedIcon /> </IconButton>
              <UserDropDown />
            </Stack>
          </Stack>
        </Stack> : null}
      <>
        {children}
      </>
    </>
  );
};

export default Layout;
