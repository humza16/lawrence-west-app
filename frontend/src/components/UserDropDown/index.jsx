import React from 'react'
import { Box, Avatar, Menu, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Carousel from 'assets/images/Carousel.png'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles'
import { appBlackcolor } from 'theme/colors';



const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.text.primary,
}));

const UserDropDown = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSignout = () => { }

    const iconColor = { color: appBlackcolor, minWidth: '40px' }

    return (
        <>
            <Avatar src={Carousel} alt="avatar" onClick={handleClick} sx={{ cursor: 'pointer' }} />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <StyledLink to='/'>
                    <ListItem disablePadding onClick={handleClose}>
                        <ListItemButton>
                            <ListItemIcon sx={iconColor}>
                                <BorderColorOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                </StyledLink>
                <StyledLink to='/'>
                    <ListItem disablePadding onClick={handleClose}>
                        <ListItemButton>
                            <ListItemIcon sx={iconColor}>
                                <PhoneOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Contact us" />
                        </ListItemButton>
                    </ListItem>
                </StyledLink>
                <StyledLink to='/legal-agreement'>
                    <ListItem disablePadding onClick={handleClose}>
                        <ListItemButton>
                            <ListItemIcon sx={iconColor}>
                                <AssignmentOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Legal Agreement" />
                        </ListItemButton>
                    </ListItem>
                </StyledLink>
                <StyledLink to='/login'>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon sx={iconColor}>
                                <LogoutOutlinedIcon sx={{ rotate: '180deg' }} />
                            </ListItemIcon>
                            <ListItemText primary="Sign Out" />
                        </ListItemButton>
                    </ListItem>
                </StyledLink>
            </Menu>
        </>
    )
}

export default UserDropDown