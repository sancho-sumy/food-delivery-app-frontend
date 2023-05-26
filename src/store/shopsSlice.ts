import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Shop } from '../schemas';
import type { RootState } from './store';

export interface ShopsState {
    shops: Shop[];
    currentShopId: string;
}

const initialState: ShopsState = {
    shops: [],
    currentShopId: '',
};

export const shopsSlice = createSlice({
    name: 'shops',
    initialState,
    reducers: {
        getShops: (state, action: PayloadAction<Shop[]>) => {
            state.shops = [...action.payload];
        },
        setShop: (state, action: PayloadAction<string>) => {
            state.currentShopId = action.payload;
        },
    },
});

export const { getShops, setShop } = shopsSlice.actions;

export const selectShops = (state: RootState) => state.shops.shops;
export const selectCurrentShop = (state: RootState) => state.shops.currentShopId;

export default shopsSlice.reducer;
