import React from 'react'
import { Typography, Box } from "@mui/material";
const ForgetPasswordHeader = ({ title, description }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      textAlign="center"
    >
      <Typography fontWeight={600} mb={4} fontSize={28}>
        {title}
      </Typography>

      <Typography variant='body2' fontSize={14} color="#86868B">
        {
          description
        }
      </Typography>
    </Box>
  )
}

export default ForgetPasswordHeader