import React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Typography, Box } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';
import UploadIcon from 'assets/logos/UploadIcon';
import AnimatedBox from './AnimatedBox';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const typographyStyle = {
    fontSize: 10,
    margin: 'auto',
    p: 0,
    mt: 0.5,
};

const ImageButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '12px',
    padding: '32px',
    width: '100%',
    height: '140px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}));

const InputFileUpload = ({ onChange, ...props }) => {
    const handleChange = (e) => {
        onChange && onChange(e);
    };

    return (
        <ImageButton component="label" startIcon={<UploadIcon />}>
            <Typography variant="body2" fontWeight={600} color={(theme) => theme.palette.text.primary}>
                Click to upload a photo
            </Typography>
            <Typography variant="body2" color={(theme) => theme.palette.text.primary}>
                JPEG, PNG, or GIF
            </Typography>
            <VisuallyHiddenInput {...props} onChange={handleChange} type="file" />
        </ImageButton>
    );
};

const AddProfileForm = ({ genericHeight }) => {
    const { formState: { errors }, control, watch } = useFormContext();
    const profileImageFileName = watch('profileImage')?.split('\\')?.pop() || '';

    return (
        <AnimatedBox mb={2} genericHeight={genericHeight} height={genericHeight}>
            <Controller
                name="profileImage"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                    <InputFileUpload {...field} />
                )}
            />
            <Typography {...typographyStyle}>
                {profileImageFileName}
            </Typography>
            <Typography {...typographyStyle} color="error" display="contents">
                {errors?.profileImage?.message}
            </Typography>
        </AnimatedBox>
    );
};

export default AddProfileForm;
