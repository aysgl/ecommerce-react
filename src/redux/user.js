import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    items: null,
    status: 'idle',
    error: null,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const res = await fetch('http://localhost:4000/api/products');
    const users = await res.json();

    return users;
});

const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},

    extraReducers: {
        [fetchUsers.pending]: (state, action) => {
            state.status = 'loading';
        },

        [fetchUsers.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload;
        },

        [fetchUsers.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
    },
});

export default usersSlice.reducer;