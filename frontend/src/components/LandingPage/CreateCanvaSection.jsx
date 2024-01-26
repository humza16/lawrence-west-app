import { Box, Typography } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import lady from "assets/images/lady.png";
import family from "assets/images/family.png";
import Birthday from "assets/images/birthday.png";
import mountains from "assets/images/mountains.png";
import flowers from "assets/images/flowers.png";
import party from "assets/images/party.png";
import anniversary from "assets/images/anniversary.png";
import template from "assets/images/templates.svg"



const imageProps = {
    style: { borderRadius: "18px", maxWidth: "100%", height: "auto" },
    effect: 'blur'
}

const CreateCanvaSection = () => {
    return (
        <>
            <Box
                display="flex"
                justifyContent="start"
                alignItems="start"
                flexDirection="column"
                maxWidth='80%'
                margin="0 auto"
            >
                <Box
                    flexDirection="column"

                >
                    <Typography
                        fontWeight={700}
                        textAlign='start'
                        sx={{
                            fontSize: { xs: 24, md: 40, lg: 55 }
                        }}
                        marginTop="50px"

                    >
                        Create reels
                    </Typography>
                    <Typography
                        fontWeight={700}
                        textAlign='start'
                        marginBottom="30px"
                        sx={{
                            fontSize: { xs: 24, md: 40, lg: 55 }
                        }}
                    >
                        with our
                        <Typography variant='h3' fontWeight={700}
                            textAlign='center' sx={{
                                // minHeight: { xs: 38, md: 70, lg: 90 },
                                display: "inline",
                                // fontSize: { xs: 24, md: 40, lg: 55 },
                                backgroundImage: `url(${template})`,
                                backgroundPosition: "100% 100%",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "contain",
                                maxWidth: "fit-content"
                            }}>Templates</Typography>

                    </Typography>
                </Box>
            </Box >
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                gap: "8px",
                flexWrap: "wrap",
                maxWidth: "100%",


            }}>
                <LazyLoadImage src={party} {...imageProps} />
                <LazyLoadImage src={mountains} {...imageProps} />
                <LazyLoadImage src={Birthday} {...imageProps} />
                <LazyLoadImage src={flowers} {...imageProps} />
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                gap: "8px",
                maxWidth: "100%",
                flexWrap: "wrap",
                marginTop: "10px",
                marginBottom: "35px"
            }}>

                <LazyLoadImage src={family} {...imageProps} />
                <LazyLoadImage src={anniversary} {...imageProps} />
                <LazyLoadImage src={lady} {...imageProps} />
            </Box >
        </>
    )
}

export default CreateCanvaSection