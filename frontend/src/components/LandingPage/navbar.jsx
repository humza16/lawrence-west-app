import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from 'assets/logos/Logo';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Button } from '@mui/material';

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.text.primary,
    textAlign: "center",
    fontWeight: 400,
    '&:hover': {
        color: theme.palette.primary.main
    }
}));
const StyledButton = styled(Button)(({ theme }) => ({
    // color: '#1053D4',
    border: `2px solid #1053D4`,
    borderRadius: "30px!important",
    minWidth: "68px",
    fontWeight: "400 !important",
    height: "42px"


}));

const LandingNavbar = () => {
    return (
        <Toolbar sx={{ Width: "100%", maxHeight: "122px", display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "#EBFAFF" }}>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} disableRipple>
                <MenuIcon />
                <Link to='/'><Logo maxWidth="199" height="41" /></Link>
            </IconButton>
            <Stack direction='row' alignItems="right" spacing={3} sx={{ alignItems: "center" }}>
                <StyledLink to="/">Project</StyledLink>
                <StyledLink to="/">Photos</StyledLink>
                <StyledLink to="/">Videos</StyledLink>
                <StyledButton disableRipple>Sign Up</StyledButton>
                <StyledButton disableRipple sx={{ backgroundColor: "#1053D4", color: "white" }}>Sign In</StyledButton>

            </Stack>
        </Toolbar>
    );
}
export default LandingNavbar;