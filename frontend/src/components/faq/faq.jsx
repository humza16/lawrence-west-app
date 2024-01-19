import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material'
// import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useGetFaqsQuery } from 'apis/helpCenter.api';
import Loader from 'components/Loader';


const MuiAccordian = ({ question, answer }) => (
    <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon color='primary' />}>
            <Typography fontWeight={600}>{question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                {answer}
            </Typography>
        </AccordionDetails>
    </Accordion>
)

const Faq = () => {
    const { data, isLoading } = useGetFaqsQuery();
    const { results = [] } = data || {};
    return (
        <Stack width="100%" justifyContent="center" alignItems="center" mt={3} direction="column" gap={5} py={4}>
            <Typography variant="h5" fontWeight={600}>Frequently Asked Questions</Typography>
            <Stack maxWidth="880px" width="100%" gap={2} direction="column">
                {isLoading ? (
                    <Loader />
                ) : (
                    results?.map(({ answer, question, id }) => (
                        <MuiAccordian key={id} question={question} answer={answer} />
                    ))
                )}
            </Stack>
        </Stack>
    )
}

export default Faq