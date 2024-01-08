import { useSelector, useDispatch } from 'react-redux';
import { localstorageService } from "utils/localStorageService";
import { useGetUserQuery } from "apis/userProfile";
import { loginSuccess } from "slices/userSlice";

const useAuth = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state?.user?.userInfo)
    const { data, isSuccess, isError, isLoading } = useGetUserQuery(
        localstorageService.getToken(),
        { skip: Boolean(user?.id) || !localstorageService.getToken() }
    );

    if (isLoading) {
        return { loading: true, authenticated: false };
    }

    if (isError) {
        localstorageService.removeToken();
        return { loading: false, authenticated: false };
    }

    if (isSuccess) {
        dispatch(loginSuccess(data));
    }

    return { loading: false, authenticated: isSuccess || (Boolean(user?.id) && localstorageService.getToken()) };
};

export default useAuth;
