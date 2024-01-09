import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: {},
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.userInfo = action.payload;
        },
        resetUser: (state) => {
            state.userInfo = {};
        },
    },
});

export const { loginSuccess, resetUser } = userSlice.actions;

export default userSlice.reducer;
