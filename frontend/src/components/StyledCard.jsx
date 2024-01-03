import React from 'react'
import { styled } from '@mui/system';
import { Card } from "@mui/material";

const CardStyle = styled(Card)({
    padding: '32px 24px',
    boxShadow: '0px 2px 20px 0px #83848626',

    // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
});
const StyledCard = ({ children }) => <CardStyle>{children}</CardStyle>

export default StyledCard