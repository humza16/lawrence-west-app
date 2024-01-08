import React from 'react'
import { Box, CircularProgress } from '@mui/material';

const Loader = () => {
    return (
        <Box
            width="100%"
            height="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <CircularProgress
                variant="indeterminate"
                color='primary'
                size={40}
                thickness={4}
                value={100}
            />
        </Box>
    )
}

export default Loader