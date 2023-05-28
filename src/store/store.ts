import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import alertSlice from './alertSlice';
import cartSlice from './cartSlice';
import itemsSlice from './itemsSlice';
import shopsReducer from './shopsSlice';

export const store = configureStore({
    reducer: {
        shops: shopsReducer,
        cart: cartSlice,
        alert: alertSlice,
        items: itemsSlice,
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
