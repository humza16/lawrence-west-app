import * as React from 'react';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
import Logo from 'assets/logos/Logo';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Button } from '@mui/material';

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.text.primary,
    textAlign: "center",
    fontWeight: 400,
    fontFamily: theme.typography.fontFamily,
    '&:hover': {
        color: theme.palette.primary.main
    },
    [theme.breakpoints.down('md')]: {
        display: "none",
    },
}));
const StyledButton = styled(Button)(({ theme }) => ({
    border: `2px solid #1053D4`,
    borderRadius: "30px!important",
    padding: '2px 32px',
    fontSize: '1.125rem !important',
    fontWeight: 700,
    // [theme.breakpoints.up('sm')]: {
    //     fontSize: theme.typography.body1.fontSize,
    // },
    [theme.breakpoints.down('md')]: {
        fontSize: "0.6rem!important",
        height: 'auto',
        padding: '2px 16px',
    },
}));

const LandingNavbar = () => {
    const navigate = useNavigate();
    const handleRedirection = (route) => () => {
        navigate(route)
    }

    return (
        <Stack direction='row' justifyContent="space-between" p={2} sx={{ backgroundColor: "#EBFAFF" }} alignItems="center">
            {/* <MenuIcon /> */}
            <Link to='/'><Logo width="199" height="41" /></Link>
            <Stack direction='row' alignItems="center" spacing={2}>
                <StyledLink to="/">Project</StyledLink>
                <StyledLink to="/">Photos</StyledLink>
                <StyledLink to="/">Videos</StyledLink>
                <StyledButton size='large' onClick={handleRedirection("/register")}>Sign Up</StyledButton>
                <StyledButton size='large' onClick={handleRedirection("/login")} variant='contained' color='secondary'>Sign In</StyledButton>
            </Stack>
        </Stack>
    );
}
export default LandingNavbar;