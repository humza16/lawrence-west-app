import { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSigninMutation } from 'apis/auth.api';
import useEffectAfterSuccess from './useEffectAfterSuccess';
import { localstorageService } from 'utils/localStorageService';
import { loginSuccess } from 'slices/userSlice';

const useSignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [onSignIn, { data, isLoading, isSuccess }] = useSigninMutation();

  const handleLogin = useCallback(() => {
    localstorageService.setToken(data?.token);
    const userDetail = {
      username: data?.username,
      email: data?.email,
      name: data?.name
    }
    dispatch(loginSuccess(userDetail));
    navigate("/");
  }, [data, dispatch, navigate]);

  useEffectAfterSuccess(handleLogin, isSuccess);
  return {
    isSignInLoading: isLoading,
    onSignIn
  }
}

export default useSignIn