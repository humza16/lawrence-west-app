import { useSelector, useDispatch } from 'react-redux';
import { localstorageService } from "utils/localStorageService";
import { useGetUserQuery } from "apis/auth.api";
import { loginSuccess } from "slices/userSlice";

const useAuth = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state?.user?.userInfo)
    const { data, isSuccess, isError, error, isLoading } = useGetUserQuery(
        localstorageService.getToken(),
        { skip: Boolean(user?.id) || !localstorageService.getToken() }
    );

    if (isLoading) {
        return { isLoading, authenticated: false };
    }

    if (isError) {
        console.log(error, "error")
        localstorageService.removeToken();
        return { isLoading, authenticated: false };
    }

    if (isSuccess) {
        dispatch(loginSuccess(data));
    }

    return {
        authenticated: isSuccess || (Boolean(user?.id) && localstorageService.getToken()),
        isLoading
    };
};

export default useAuth;
