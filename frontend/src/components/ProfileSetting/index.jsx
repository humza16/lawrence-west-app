import React from 'react';
import { Stack, Divider } from '@mui/material';
import ProfileSidebar from 'components/ProfileSidebar';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import Profile from './Profile';
import Password from './Password';
import Payments from './Payments';


const ProfileSettings = () => {
    const [tabValue, setTabValue] = React.useState('profile');
    const options = [{ label: 'Profile Settings', value: 'profile' }, { label: 'Password', value: 'password' }, { label: 'Payments', value: 'payments' }]
    const handleChange = (_, value) => {
        setTabValue(value);
    }

    return (

        <Stack direction="row" py={2}>
            <TabContext
                value={tabValue}
            >
                <ProfileSidebar options={options} handleChange={handleChange} />
                <Divider orientation='vertical'
                    sx={{
                        borderWidth: '1px',
                        borderColor: '#E6F0FF'
                    }} />
                <TabPanel value='profile'>{<Profile />}</TabPanel>
                <TabPanel value="password"><Password /></TabPanel>
                <TabPanel value="payments"> <Payments /> </TabPanel>
            </TabContext>
        </Stack>

    )
}

export default ProfileSettings