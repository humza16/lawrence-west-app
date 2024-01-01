import React from 'react'
import Card from '@mui/material/Card';
import { CardContent, IconButton, Typography, CardMedia, CardHeader } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import CarouselImage_1 from "assets/images/Carousel.png";

const CardStyle = styled(Card)({
    maxWidth: '268.3px',
    borderRadius: "8px",
    padding: "12px",
    backgroundColor: "#F3F6FA",
});
const CardMediaStyle = styled(CardMedia)({
    marginBottom: "12px",
    maxHeight: "135.8px",
    borderRadius: "8px",
    maxWidth: "239.25px",

});
const StyledMemoryCard = ({ }) => {


    return (
        <CardStyle sx={{ maxWidth: 345 }}>

            <CardMediaStyle
                maxWidth="239.25px"
                component="img"
                image={CarouselImage_1}
                alt="Paella dish"

            />
            <CardHeader
                maxWidth="239.25px"
                sx={{ padding: 0 }}
                titleTypographyProps={{
                    fontWeight: 600,
                }}


                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon
                            sx={{ rotate: '90deg', marginBottom: '4px' }}
                        />
                    </IconButton>
                }
                title="Moment video"

            />
            <CardContent
                maxWidth="239.2px"
                sx={{ padding: 0 }}


            >
                <Typography
                    fontSize={14}
                    color="#111A2CB2"
                    fontWeight={400}
                >
                    This impressive paella is a perfect party dish and a fun meal to cook

                </Typography>
            </CardContent>

        </CardStyle>
    )
}

export default StyledMemoryCard