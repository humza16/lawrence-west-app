import React from 'react';
import { styled } from '@mui/material/styles'
import { Dialog, Box, Typography, Button, Stack } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import LogoutIcon from 'assets/logos/LogoutIcon';

const MuiDialog = styled(Dialog)(() => ({
    '& .MuiPaper-root': {
        padding: '32px 24px!important',
        minWidth: '350px',
        boxShadow: "0px 8px 8px -4px #1018280A",
        borderRadius: '4px',
    },
}));

const LogoutModal = ({ open, handleClose, onClickLogout, isLoading }) => {
    return (
        <MuiDialog onClose={handleClose} open={open}>
            <Stack justifyContent="center" alignItems="center">
                <LogoutIcon />
                <Typography gutterBottom variant='h6' textAlign='center'>Logout from Reel Moment</Typography>
                <Typography marginBottom={2} fontSize={14} color="#667085" textAlign='center'>Are you sure you want to logout form Reel Moment?</Typography>
                <Box display='flex' alignItems='center' justifyContent='center' gap={2}>
                    <Button sx={{ paddingX: "40px" }} size='large' fullWidth onClick={handleClose} variant='outlined'> Cancel </Button>
                    <LoadingButton
                        sx={{ paddingX: "40px" }}
                        size='large'
                        fullWidth
                        loading={isLoading}
                        variant="contained"
                        // color='error'
                        onClick={onClickLogout}
                    >
                        Logout
                    </LoadingButton>
                </Box>
            </Stack>
        </MuiDialog>
    )
}

export default LogoutModal