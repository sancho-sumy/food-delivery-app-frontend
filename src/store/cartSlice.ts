import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Cart, Goods } from '../schemas';
import type { RootState } from './store';

const initialState: Cart = {
    items: [],
    totalQuantity: 0,
    orderPrice: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart(state) {
            state.items = initialState.items;
            state.orderPrice = initialState.orderPrice;
            state.totalQuantity = initialState.totalQuantity;
        },
        addItemToCart(state, action: PayloadAction<Goods>) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            state.orderPrice += newItem.price;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                });
            } else {
                existingItem.quantity = existingItem.quantity + 1;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },

        increaseItemQuantity(state, action: PayloadAction<string>) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                state.totalQuantity++;
                state.orderPrice += existingItem.price;
                existingItem.quantity++;
                existingItem.totalPrice += existingItem.price;
            } else {
                return;
            }
        },

        decreaseItemQuantity(state, action: PayloadAction<string>) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem && existingItem.quantity > 1) {
                state.totalQuantity--;
                state.orderPrice -= existingItem.price;
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            } else {
                return;
            }
        },

        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                state.totalQuantity -= existingItem?.quantity;
                state.orderPrice -= existingItem?.totalPrice;
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                return;
            }
        },
    },
});

export const {
    clearCart,
    addItemToCart,
    decreaseItemQuantity,
    increaseItemQuantity,
    removeItemFromCart,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;
export const selectCartItems = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
