import React from 'react';
import { Grid, Typography, Divider, Stack } from '@mui/material';
import { Link as MuiLink } from 'react-router-dom';
import { styled } from '@mui/material/styles'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Logo from 'assets/logos/Logo';
import { FooterLinkSecondary } from 'theme/colors';

const NavLink = styled(MuiLink)(() => ({
    textDecoration: 'none',
    color: FooterLinkSecondary,
}));

const Link = ({ to, children, ...props }) => {
    return (
        <NavLink to={to} >
            <Typography {...props}>{children}</Typography>
        </NavLink>
    )
}

const handleSocialButtons = (link) => () => {
    console.log(link)
}

const Footer = () => {
    return (
        <Stack>
            <Grid container height="400px" borderBottom="1px solid #E6F0FF">
                <Grid item container xs={12} md={5.5} alignItems='center' sx={{ paddingX: { xs: 2, lg: 8 } }}>
                    <Grid item xs={12} md={6}>
                        <Logo width="199" height="41" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </Typography>
                    </Grid>
                </Grid>
                <Divider orientation='vertical' sx={{
                    height: 'auto',
                    borderWidth: '1px',
                    borderColor: '#E6F0FF'
                }} />
                <Grid container item xs={12} md={6} alignItems='center' sx={{ paddingX: { xs: 2, lg: 8 } }}>
                    <Grid item xs={12} md={4}>
                        <Typography fontWeight={600} color='primary' gutterBottom>Contact</Typography>
                        <Link to='/' gutterBottom>FAQs</Link>
                        <Link to='/' gutterBottom>Contact Us</Link>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography fontWeight={600} color='primary' gutterBottom>Legal</Typography>
                        <Link to='/' gutterBottom>Terms of Service</Link>
                        <Link to='/' gutterBottom>Privacy Policy</Link>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Stack flex='flex-start'>
                            <Typography fontWeight={600} color='primary' gutterBottom textAlign='start'>Follow</Typography>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <FacebookIcon sx={{ cursor: 'pointer' }} onClick={handleSocialButtons("www.facebook.com")} />
                                <TwitterIcon sx={{ cursor: 'pointer' }} onClick={handleSocialButtons("www.twitter.com")} />
                                <InstagramIcon sx={{ cursor: 'pointer' }} onClick={handleSocialButtons("www.instagram.com")} />
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
            <Typography textAlign='center' sx={{ opacity: '50%' }} paddingY={5} paddingX={2} >Copyright © 2023. reel moment. All rights reserved.</Typography>
        </Stack>
    )
}

export default Footer