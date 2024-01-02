import React from 'react';
import { FacebookOutlined } from '@mui/icons-material';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { SecondaryLoadingButton } from './SecondaryLoadingButton';
import useSignIn from 'shared/hooks/useSignIn';
const SignInWithFacebook = (props) => {
  const { onSignIn, isSignInLoading: isLoading } = useSignIn();

  const facebookResponse = (response) => {
    onSignIn(response);
  }

  return (
    <FacebookLogin
      appId={process.env.REACT_APP_FACEBOOK_APP_ID}
      fields="name,email,picture"
      callback={facebookResponse}
      render={renderProps => (
        <SecondaryLoadingButton
          {...props}
          onClick={renderProps.onClick}
          startIcon={<FacebookOutlined sx={{ color: 'blue', fontSize: '1.8rem!important' }} />}
          color="secondary"
          loading={isLoading}
        >
          Sign in with Facebook
        </SecondaryLoadingButton>
      )}
    />
  )
}

export default SignInWithFacebook