import React from 'react';
import { useGoogleLogin } from "@react-oauth/google";
import axios from 'axios';
import Google from "assets/logos/Google";
import { SecondaryLoadingButton } from './SecondaryLoadingButton';
import useSignIn from 'shared/hooks/useSignIn';
// import { useLazySignInwithGoogleQuery } from 'apis/auth.api';

const SingInWithGoogle = () => {
    const { onSignIn, isSignInLoading } = useSignIn();
    // const [singInwithgoogle, { data }] = useLazySignInwithGoogleQuery();
    const onGoogleLoginSuccess = async (response) => {
        axios
            .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${response.access_token}`, {
                headers: {
                    Authorization: `Bearer ${response.access_token}`,
                    Accept: 'application/json'
                }
            })
            .then((res) => {
                handleLogin({ ...res.data, access_token: response.access_token });
            })
            .catch((err) => console.log(err));
    };

    const login = useGoogleLogin({
        onSuccess: onGoogleLoginSuccess,
        onError: (error) => console.log(error),
    });

    const handleLogin = (values) => {
        onSignIn(values)
    }

    return (
        <SecondaryLoadingButton loading={isSignInLoading} startIcon={<Google />} color="secondary" onClick={login}>
            Sign in with Google
        </SecondaryLoadingButton>
    )
}

export default SingInWithGoogle