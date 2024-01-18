import {
  combineReducers,
  configureStore,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import CounterReducer from "slices/counterSlice";
import { helpCenter } from "apis/helpCenter.api";
import { userProfileApi } from "apis/userProfile.api";
import { authApi } from "apis/auth.api";
import UserReducer from 'slices/userSlice';
import toast from 'react-hot-toast';

export const ErrorLoggerMiddleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const { data, status } = action?.payload ?? {
      data: { message: "" },
      status: 200,
    };
    if (status === 401) {
      // const data = refreshToken();
      // localstorageService.logout();
    }
    toast.error(data?.message || action?.payload?.error);
  }
  return next(action);
};

const combinedReducer = combineReducers({
  counter: CounterReducer,
  helpCenter: helpCenter.reducer,
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
      helpCenter.middleware,
      userProfileApi.middleware,
      authApi.middleware,
      // ErrorLoggerMiddleware,
    ]),
});
export default store;
//   export type AppStore = typeof store;
//   export type RootState = ReturnType<typeof store.getState>;
//   export type AppDispatch = typeof store.dispatch;
