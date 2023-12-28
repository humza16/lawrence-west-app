import {
  combineReducers,
  configureStore,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import CounterReducer from "slices/counterSlice";
import { testApi } from "apis/test.api";
import { userProfileApi } from "apis/userProfile";
//   import { toast } from 'react-toastify';

export const ErrorLoggerMiddleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const { data, status } = action?.payload ?? {
      data: { message: "" },
      status: 200,
    };
    if (status === 401) {
      // localstorageService.logout();
      // localstorageService.logoutGuest();
    }
    //   toast.error(data?.message);
  }
  return next(action);
};

const combinedReducer = combineReducers({
  counter: CounterReducer,
  testApi: testApi.reducer,
  userProfileApi: userProfileApi.reducer,
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
      ErrorLoggerMiddleware,
    ]),
});
export default store;
//   export type AppStore = typeof store;
//   export type RootState = ReturnType<typeof store.getState>;
//   export type AppDispatch = typeof store.dispatch;
