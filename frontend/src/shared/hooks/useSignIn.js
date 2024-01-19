import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSigninMutation } from 'apis/auth.api';
import useEffectAfterSuccess from './useEffectAfterSuccess';
import { localstorageService } from 'utils/localStorageService';

const useSignIn = () => {
  const navigate = useNavigate();
  const [onSignIn, { data, isLoading, isSuccess }] = useSigninMutation();

  const handleLogin = useCallback(() => {
    localstorageService.setToken(data?.access);
    localstorageService.setRefreshToken(data.refresh);
    navigate("/home");
    // if () {
    //   navigate("/onboarding");
    // } else {
    //   navigate("/");
    // }
  }, [data, navigate]);

  useEffectAfterSuccess(handleLogin, isSuccess);
  return {
    isSignInLoading: isLoading,
    onSignIn
  }
}

export default useSignIn