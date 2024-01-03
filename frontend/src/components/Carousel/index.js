import React from "react";
import { Box } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarouselImage from "assets/images/Carousel.png";
import CarouselImage_2 from "assets/images/Carousel2.png";
import CarouselImage_3 from "assets/images/Carousel3.png";

const images = [
  { id: 1, src: CarouselImage },
  { id: 2, src: CarouselImage_2 },
  { id: 3, src: CarouselImage_3 },
];

const CarouselLayout = () => {
  return (
    <Box>
      <Carousel
        autoPlay
        showStatus={false}
        showArrows={false}
        renderThumbs={() => null}
      >
        {images.map(({ id, src }) => (
          <Box key={id} maxHeight="100vh" >
            <img style={{minHeight:"100vh"}} src={src} alt="carousel" />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default CarouselLayout;
