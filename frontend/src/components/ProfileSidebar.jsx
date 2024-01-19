import React from 'react';
import { Tab } from '@mui/material';
import TabList from '@mui/lab/TabList';
import { styled } from '@mui/material/styles';
import TabPanel from '@mui/lab/TabPanel';
import { appTabColor } from 'theme/colors';

const MuiTabs = styled(TabList)(() => ({
    width: '100%',
    maxWidth: '230px',
    padding: '12px 24px',
    '.MuiTabs-indicator': {
        display: 'none',
    },
    "& .MuiTabs-scroller": {
        "& .MuiTabs-flexContainer": {
            gap: '8px!important'
        }
    }
}));

const MuiTab = styled(Tab)(({ theme }) => ({
    textTransform: 'none',
    fontSize: '16px',
    borderRadius: '4px',
    color: appTabColor,
    '&.Mui-selected': {
        color: `${theme.palette.text.secondary}!important`,
        fontWeight: 700,
        backgroundColor: `${theme.palette.primary.main}!important`,
    }
}));

const StyledTabs = ({ options = [], handleChange }) => {
    return (

        <MuiTabs onChange={handleChange} orientation='vertical'>
            {options?.map(({ label, value }) => <MuiTab disableRipple label={label} value={value} />)}
        </MuiTabs>
    )
}

const ProfileSidebar = ({ options, handleChange }) => {
    return (
        <StyledTabs
            options={options}
            handleChange={handleChange}
        />
    )
}

export default ProfileSidebar