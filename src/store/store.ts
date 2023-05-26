import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import shopsReducer from './shopsSlice';

export const store = configureStore({
    reducer: {
        shops: shopsReducer,
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
