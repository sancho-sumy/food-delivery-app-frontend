import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import shopsReducer from './shopsSlice';
import alertSlice from './alertSlice';

export const store = configureStore({
    reducer: {
        shops: shopsReducer,
        cart: cartSlice,
        alert: alertSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
