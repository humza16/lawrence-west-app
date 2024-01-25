import React from 'react';
import { FacebookOutlined } from '@mui/icons-material';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { SecondaryLoadingButton } from './SecondaryLoadingButton';
import { useSignInwithFacbookMutation } from 'apis/auth.api';
import { localstorageService } from 'utils/localStorageService';
import { useNavigate } from 'react-router-dom'

const SignInWithFacebook = (props) => {
  const navigate = useNavigate();

  const [facebookSignin, { isLoading }] = useSignInwithFacbookMutation();
  const facebookResponse = (response) => {
    facebookSignin({ access_token: response?.accessToken }).unwrap().then(res => {
      localstorageService.setToken(res?.access);
      localstorageService.setRefreshToken(res.refresh);
      navigate("/home")
    }).catch(e => {
      console.log(e);
    })
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