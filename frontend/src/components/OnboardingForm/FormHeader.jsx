import React from 'react';
import { Box, Typography } from '@mui/material';
import PlayIcon from 'assets/logos/PlayIcon';
import FaceIcon from 'assets/logos/FaceIcon';
import GenderIcon from 'assets/logos/GenderIcon';
import CalendarIcon from 'assets/logos/CalendarIcon';
import HomeIcon from 'assets/logos/HomeIcon';


const activeIcon = {
    active_1: {
        render: (props) => <PlayIcon {...props} />,
        title: "Let’s get started",
        description: 'Please provide Information below'
    },
    active_2: {
        render: (props) => <FaceIcon {...props} />,
        title: 'Add a Profile',
        description: 'Add a profile photo to your account'
    },
    active_3: {
        render: (props) => <GenderIcon {...props} />,
        title: 'Gender',
        description: 'Please provide your gender'
    },
    active_4: {
        render: (props) => <CalendarIcon {...props} />,
        title: 'Age',
        description: 'Please provide your Date of Birth'
    },
    active_5: {
        render: (props) => <HomeIcon {...props} />,
        title: 'Address',
        description: 'Please provide your Address'
    },

}

const CurrentIcon = ({ activeTab, ...props }) => {
    const Icon = activeIcon[`active_${activeTab}`];
    return Icon.render(props);
}


const FormHeader = ({ activeTab }) => {
    const title = activeIcon[`active_${activeTab}`].title;
    const description = activeIcon[`active_${activeTab}`].description;
    return (
        <Box mb={1}>
            <Box display='flex' gap='12px' alignItems='center' justifyContent='flex-start' mb={0.5}>
                <CurrentIcon activeTab={activeTab} />
                <Typography variant='h5' fontWeight={600}>{title}</Typography>
            </Box>
            <Typography>{description}</Typography>
        </Box>
    )
}

export default FormHeader