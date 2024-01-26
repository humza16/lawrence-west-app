import React from 'react';
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from 'react-router-dom'
import Google from "assets/logos/Google";
import { SecondaryLoadingButton } from './SecondaryLoadingButton';
import { useSignInwithGoogleMutation } from 'apis/auth.api';
import { localstorageService } from 'utils/localStorageService';

const SignInWithGoogle = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, { isLoading }] = useSignInwithGoogleMutation()
    const onGoogleLoginSuccess = async (res) => {
        try {
            signInWithGoogle({ auth_code: res?.code }).unwrap().then(result => {
                const { access, refresh } = result || {}
                localstorageService.setToken(access);
                localstorageService.setRefreshToken(refresh);
                navigate("/home");
                // if (is_first_login) {
                //     navigate("/onboarding")
                // } else {
                //     navigate("/");
                // }
            }).catch(e => {
                console.log(e);
            })
        } catch (e) {
            console.log(e)
        }
    };

    const login = useGoogleLogin({
        onSuccess: onGoogleLoginSuccess,
        onError: (error) => console.log(error),
        flow: 'auth-code',
    });

    return (
        <SecondaryLoadingButton loading={isLoading} startIcon={<Google />} color="secondary" onClick={login}>
            Sign in with Google
        </SecondaryLoadingButton>
    )
}

export default SignInWithGoogle