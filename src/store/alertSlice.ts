import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Alert } from '../schemas/alert';
import type { RootState } from './store';

const initialState: Alert = {
    messages: [],
    type: '',
};

export const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        setAlert: (state, action: PayloadAction<Alert>) => {
            state.messages = action.payload.messages;
            state.type = action.payload.type;
        },
        deleteAlert: (state) => {
            state.messages = [];
            state.type = '';
        },
    },
});

export const { setAlert, deleteAlert } = alertSlice.actions;

export const selectAlert = (state: RootState) => state.alert;

export default alertSlice.reducer;
