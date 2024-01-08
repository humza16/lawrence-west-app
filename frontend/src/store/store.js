import {
  combineReducers,
  configureStore,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import CounterReducer from "slices/counterSlice";
import { testApi } from "apis/test.api";
import { userProfileApi } from "apis/userProfile";
import { authApi } from "apis/auth.api";
import UserReducer from 'slices/userSlice';
import toast from 'react-hot-toast';
import { localstorageService } from "utils/localStorageService";

export const ErrorLoggerMiddleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const { data, status } = action?.payload ?? {
      data: { message: "" },
      status: 200,
    };
    if (status === 401) {
      localstorageService.logout();
    }
    toast.error(data?.message || action?.payload?.error);
  }
  return next(action);
};

const combinedReducer = combineReducers({
  counter: CounterReducer,
  testApi: testApi.reducer,
  userProfileApi: userProfileApi.reducer,
  authApi: authApi.reducer,
  user: UserReducer
});

// const reducer = (state, action) => {
//   return combinedReducer(state, action);
// };

const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      testApi.middleware,
      userProfileApi.middleware,
      authApi.middleware,
      ErrorLoggerMiddleware,
    ]),
});
export default store;
//   export type AppStore = typeof store;
//   export type RootState = ReturnType<typeof store.getState>;
//   export type AppDispatch = typeof store.dispatch;
