export interface Cart {
    items: CartItemI[];
    totalQuantity: number;
    orderPrice: number;
}

export interface CartItemI {
    id: string;
    price: number;
    quantity: number;
    totalPrice: number;
    name: string;
}
