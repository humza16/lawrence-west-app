import React from 'react'
import { Typography } from "@mui/material";
import { Link as MuiLink } from 'react-router-dom';
import { styled } from '@mui/material/styles'

const StyledLink = styled(MuiLink)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.text.primary,
    // fontWeight: 500,
    // '&:hover': {
    //     color: theme.palette.primary.main
    // }
}));

const Link = ({ to, children, ...props }) => {
    return (
        <StyledLink to={to}>
            <Typography {...props}>{children}</Typography>
        </StyledLink>
    )
}

export default Link