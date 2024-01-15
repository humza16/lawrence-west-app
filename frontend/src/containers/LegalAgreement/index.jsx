import React from 'react'
import PrivacyPolicy from 'components/LegalAgreement/PrivacyPolicy'
import StyledTabs from 'components/StyledTabs'
import { Box, Grid } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import { MuiTabPanel } from 'components/StyledTabs';
// import TabPanel from '@mui/lab/TabPanel';
import TermAndConditions from 'components/LegalAgreement/TermAndConditions';
import Faq from 'components/faq/faq';

const LegalAgreement = () => {
    const [tabValue, setTabValue] = React.useState('terms');
    const options = [{ label: 'Terms & Conditions', value: 'terms' }, { label: 'Privacy Policy', value: 'privacy' },{ label: 'FAQ', value: 'faq' }]
    const handleChange = (_, value) => {
        setTabValue(value);
    }
    return (
        <Grid>
            <Grid item xs={12}>
                <TabContext value={tabValue}>
                    <Box px={2} py={1} borderBottom='1px solid #E6F0FF'>
                        <StyledTabs options={options} handleChange={handleChange} />
                    </Box>
                    <MuiTabPanel value='terms'>{<TermAndConditions />}</MuiTabPanel>
                    <MuiTabPanel value="privacy"><PrivacyPolicy /></MuiTabPanel>
                    <MuiTabPanel value='faq'><Faq /></MuiTabPanel>
                </TabContext>
            </Grid>
        </Grid>
    )
}

export default LegalAgreement