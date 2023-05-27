import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Item } from '../schemas';
import type { RootState } from './store';

export interface ItemsState {
    items: Item[];
}

const initialState: ItemsState = {
    items: [],
};

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        getItems: (state, action: PayloadAction<Item[]>) => {
            state.items = [...action.payload];
        },
    },
});

export const { getItems } = itemsSlice.actions;

export const selectItems = (state: RootState) => state.items.items;

export default itemsSlice.reducer;
