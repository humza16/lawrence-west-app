import React from 'react'
import { Button } from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const FacebookButton = ({ ...props }) => {
    return (
        <Button
            {...props}
            startIcon={<FacebookOutlinedIcon sx={{ color: 'blue', fontSize: '1.8rem!important' }} />}
            color="secondary"
        >
            Sign in with Facebook
        </Button>
    );
}

export default FacebookButton;