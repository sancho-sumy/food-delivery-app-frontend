import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Shop } from '../schemas';
import type { RootState } from './store';

export interface ShopsState {
    shops: Shop[];
    currentShopId: string;
    activeShopId: string;
}

const initialState: ShopsState = {
    shops: [],
    currentShopId: '',
    activeShopId: '',
};

export const shopsSlice = createSlice({
    name: 'shops',
    initialState,
    reducers: {
        getShops: (state, action: PayloadAction<Shop[]>) => {
            state.shops = [...action.payload];
        },
        setCurrentShop: (state, action: PayloadAction<string>) => {
            state.currentShopId = action.payload;
        },
        setActiveShop: (state, action: PayloadAction<string>) => {
            state.activeShopId = action.payload;
        },
    },
});

export const { getShops, setCurrentShop, setActiveShop } = shopsSlice.actions;

export const selectShops = (state: RootState) => state.shops.shops;
export const selectCurrentShop = (state: RootState) => state.shops.currentShopId;
export const selectActiveShop = (state: RootState) => state.shops.activeShopId;

export default shopsSlice.reducer;
