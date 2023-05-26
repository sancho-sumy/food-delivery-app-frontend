import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { Shop } from '../schemas';

export interface ShopsState {
    shops: Shop[];
}

const initialState: ShopsState = {
    shops: [],
};

export const shopsSlice = createSlice({
    name: 'shops',
    initialState,
    reducers: {
        getShops: (state, action: PayloadAction<Shop[]>) => {
            state.shops = [...action.payload];
        },
    },
});

export const { getShops } = shopsSlice.actions;

export const shopSelector = (state: RootState) => state.shops.shops;

export default shopsSlice.reducer;
