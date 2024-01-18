import React from 'react';
import AppleLogin from 'react-apple-login'
import Apple from "assets/logos/Apple"
import { SecondaryLoadingButton } from './SecondaryLoadingButton';

const SignInWithApple = () => {

    const handleResponse = async (resp) => {
        console.log(resp);
    }

    return (
        <AppleLogin
            clientId=""
            redirectURI=""
            usePopup={true}
            callback={handleResponse} // Catch the response
            scope="email name"
            responseMode="query"
            render={renderProps => (
                <SecondaryLoadingButton
                    startIcon={<Apple />}
                    color="secondary"
                    onClick={renderProps.onClick}
                >
                    Sign in with Apple
                </SecondaryLoadingButton>
            )}
        />
    )
}

export default SignInWithApple