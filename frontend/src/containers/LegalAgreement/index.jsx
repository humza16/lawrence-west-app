import React from 'react'
import PrivacyPolicy from 'components/LegalAgreement/PrivacyPolicy'
import { Stack } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
// import { MuiTabPanel } from 'components/StyledTabs';
import TermAndConditions from 'components/LegalAgreement/TermAndConditions';

// import { Stack } from '@mui/material';
import ProfileSidebar from 'components/ProfileSidebar';
import TabPanel from '@mui/lab/TabPanel';
// import TabContext from '@mui/lab/TabContext';


const LegalAgreement = () => {
    const [tabValue, setTabValue] = React.useState('terms');
    const options = [{ label: 'Terms & Conditions', value: 'terms' }, { label: 'Privacy Policy', value: 'privacy' }]
    const handleChange = (_, value) => {
        setTabValue(value);
    }
    return (
        <Stack direction="row" py={2}>
            <TabContext
                value={tabValue}
            >
                <ProfileSidebar options={options} handleChange={handleChange} />
                <TabPanel sx={{ width: '100%' }} value='terms'>{<TermAndConditions />}</TabPanel>
                <TabPanel sx={{ width: '100%' }} value="privacy"><PrivacyPolicy /></TabPanel>
            </TabContext>
        </Stack>
    )
}

export default LegalAgreement