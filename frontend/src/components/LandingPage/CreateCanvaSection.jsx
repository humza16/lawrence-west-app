import react from 'react'
import { Box, Typography, Grid } from '@mui/material'
import lady from "assets/images/lady.svg";
import family from "assets/images/family.svg";
import Birthday from "assets/images/Birthday.svg";
import mountains from "assets/images/mountains-svg.svg";
import flowers from "assets/images/Flowers.svg";
import party from "assets/images/party.svg";
import anniversary from "assets/images/anniversary.svg";
import template from "assets/images/templates.svg"

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
                <img src={party} style={{ borderRadius: "18px", maxWidth: "100%", height: "auto" }} />
                <img src={mountains} style={{ borderRadius: "18px", maxWidth: "100%", height: "auto" }} />
                <img src={Birthday} style={{ borderRadius: "18px", maxWidth: "100%", height: "auto" }} />
                <img src={flowers} style={{ borderRadius: "18px", maxWidth: "100%", height: "auto" }} />
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

                <img src={family} style={{ borderRadius: "18px", maxWidth: "100%", height: "auto" }} />
                <img src={anniversary} style={{ borderRadius: "18px", maxWidth: "100%", height: "auto" }} />
                <img src={lady} style={{ borderRadius: "18px", maxWidth: "100%", height: "auto" }} />
            </Box >

        </>
    )
}

export default CreateCanvaSection