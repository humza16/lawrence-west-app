import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { localstorageService } from "utils/localStorageService";
import { useGetUserQuery } from "apis/auth.api";
import { loginSuccess, resetUser } from "slices/userSlice";

const useAuth = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state?.user?.userInfo)
    const { data, isSuccess, isError, error, isLoading } = useGetUserQuery(
        localstorageService.getToken(),
        { skip: Boolean(user?.id) || !(localstorageService.getToken() || localstorageService.getRefreshToken()) }
    );

    useEffect(() => {
        if (isSuccess && !Boolean(user?.email)) {
            dispatch(loginSuccess(data));
        }
    }, [isSuccess, data, dispatch, user.email])

    if (isLoading) {
        return { isLoading, authenticated: false };
    }

    if (isError) {
        console.log(error, "error")
        dispatch(resetUser());
        localstorageService.logout();
        return { isLoading, authenticated: false };
    }

    return {
        authenticated: isSuccess || (Boolean(user?.id) && localstorageService.getToken()),
        isLoading
    };
};

export default useAuth;
