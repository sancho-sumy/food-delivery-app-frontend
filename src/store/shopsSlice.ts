import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

export interface Goods {
    id: string;
    name: string;
    price: number;
}

export interface Shop {
    id: string;
    name: string;
    menu: Goods[];
}

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
