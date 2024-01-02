import LoadingButton from '@mui/lab/LoadingButton';
import { styled } from '@mui/material/styles';


export const SecondaryLoadingButton = styled(LoadingButton)(({ theme, loading }) => ({
    '&.MuiButton-root': {
        color: loading ? 'transparent!important' : theme.palette.secondary.main,
        backgroundColor: loading ? "#0000001f!important" : "inherit",
    },
    '.MuiButton-startIcon ': {
        display: loading ? 'none' : 'inline-flex',
    },
}));
