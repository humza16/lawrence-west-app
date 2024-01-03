import React, { useState, useRef } from 'react';
import { Box, Button } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { styled, keyframes } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import Stepper from 'components/Stepper';
import FormHeader from './FormHeader';
import { useCreateUserProfileMutation } from 'apis/userProfile';
import { onboardingForms } from './formSchema';
import AnimatedBox from './AnimatedBox';


const animateHeight = keyframes`
  0% {
    height: 0px;
  }
  100% {
    height: ${(props) => props.genericHeight || '0px'};
  }
`;

// const opacityBreak = keyframes`
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `;

// const FormBox = styled(Box)(() => ({
//     animation: `${animateHeight} 0.9s ease, ${opacityBreak} 0.8s ease`,
//     transition: 'all 0.8s ease',
// }));

const OnboardingForm = () => {
    const navigate = useNavigate();
    const formRef = useRef(null);
    const [activeTab, setActiveTab] = useState(1);
    const [image, setImage] = useState(null);
    const form = onboardingForms[`active_${activeTab}`];
    const schema = form.schema;
    const ActiveForm = form.render;
    const [onCreatUserProfile, { isLoading, isSuccess }] = useCreateUserProfileMutation();

    const methods = useForm({
        resolver: yupResolver(schema),
    });

    const getFormData = (values) => {
        const formData = new FormData();
        Object.keys(values).forEach((key) => formData.append(key, values[key]));
        formData.append("profileImage", image);
        return formData;
    }

    const onSubmit = async (values, e) => {
        console.log(values, "values");
        if (activeTab === 1) {
            if (e?.nativeEvent?.submitter?.name === 'save') {
                onCreatUserProfile(getFormData({ username: values.username, bio: values.bio }));
                navigate("/");
                return;
            }
        }
        if (activeTab === 2) {
            const profileImage = e.target.profileImage.files[0];
            setImage(profileImage);
            methods.setValue("profileImage", "");
        }
        if (activeTab === 5) {
            onCreatUserProfile(getFormData(values));
            navigate("/");
            return;
        }
        setActiveTab(v => v + 1);
    }

    const handleBack = () => {
        if (activeTab > 1) {
            setActiveTab(v => v - 1);
        }
    }

    const handleSkip = () => {
        const values = methods.getValues();
        onCreatUserProfile(getFormData(values));
    }

    return (
        <Box
            width="100%"
            height="100vh" // Set the height of the container
            display="flex"
            justifyContent="center"
            alignItems="center"
            position='relative'
        >
            <Box maxWidth="330px" sx={{
                transition: 'all 0.8s ease'
            }}
                display="flex"
                flexDirection="column"
            >
                <Stepper activeTab={activeTab} mb={3} />
                <FormHeader activeTab={activeTab} />
                <FormProvider  {...methods}>
                    <Box
                        component="form"
                        // className='Animate_Opacity'
                        mb={2}
                        onSubmit={methods.handleSubmit(onSubmit)}
                        ref={formRef}
                    // genericHeight={form.height}
                    // height={form.height}

                    // sx={{height: form.height}}
                    >
                        <ActiveForm genericHeight={form.height} />
                        <Box sx={{ backgroundColor: '#FFFFFF' }}>
                            <Button sx={{ marginBottom: '16px' }} type="submit" fullWidth variant="contained">Next</Button>
                            <Button name={activeTab === 1 ? 'save' : ''} color='secondary' type={activeTab === 1 ? 'submit' : 'button'} fullWidth onClick={handleBack}>{activeTab > 1 ? "Back" : "Save and Finish"}</Button>
                        </Box>
                    </Box>
                </FormProvider>
            </Box>
            {
                activeTab !== 1 && <Box position='absolute' bottom='24px' right='24px'>
                    <Button disableRipple variant='noBackground' endIcon={<KeyboardArrowRightIcon />} onClick={handleSkip}>Skip Onboarding</Button>
                </Box>
            }
        </Box >
    )
}

export default OnboardingForm