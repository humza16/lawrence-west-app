import React from 'react'
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import { styled } from '@mui/material/styles';
import TabPanel from '@mui/lab/TabPanel';




import { appTabColor } from 'theme/colors';


const MuiTabs = styled(TabList)(() => ({
    '.MuiTabs-indicator': {
        display: 'none',
    },
}));

const MuiTab = styled(Tab)(({ theme }) => ({
    textTransform: 'none',
    fontSize: '16px',
    color: appTabColor,
    '&.Mui-selected': {
        color: `${theme.palette.text.primary}!important`,
        fontWeight: 600,
    }
}));

export const MuiTabPanel = styled(TabPanel)(() => ({
    padding: '0px!important',
}));


const StyledTabs = ({ options = [], handleChange }) => {
    return (

        <MuiTabs onChange={handleChange}>
            {options?.map(({ label, value }) => <MuiTab disableRipple label={label} value={value} />)}
        </MuiTabs>
    )
}

export default StyledTabs