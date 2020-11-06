import { createSlice } from '@reduxjs/toolkit'

export const authenticationStore = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false
    },
    reducers: {
        setAuthentication: (state, action) => {
            state.isAuthenticated = action.payload;
        }
    }
});

export const {setAuthentication} = authenticationStore.actions;

export const selectAuth = state => state.auth.isAuthenticated;

export default authenticationStore.reducer;
