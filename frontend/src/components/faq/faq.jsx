import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material'
import CenteredBox from 'components/CenteredBox';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import theme from 'theme';

const Faq = ({ question="If you could change careers right this second, what would you do?", answer="If you could change careers right this second, what would you do? If you could change careers right this second, what would you do?" }) => {
    return (
        <Box display="flex" justifyContent="center" mt={5}>
            <Accordion>
                <AccordionSummary expandIcon={<AddCircleOutlineOutlinedIcon color='primary' />}>
                    <Typography>{question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {answer} 
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default Faq