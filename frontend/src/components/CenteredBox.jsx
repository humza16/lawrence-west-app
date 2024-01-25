import React from 'react'
import { Box } from "@mui/material";

const CenteredBox = ({ children, maxWidth = "380px", height = "100vh", ...props }) => {
    return (
        <Box
            width="100%"
            height={height} // Set the height of the container
            display="flex"
            justifyContent="center"
            alignItems="center"
            {...props}
        >
            <Box
                maxWidth={maxWidth}
                display="flex"
                flexDirection="column"
            >
                {children}
            </Box>
        </Box>
    )
}

export default CenteredBox