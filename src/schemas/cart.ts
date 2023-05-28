export interface Cart {
    items: OrderItem[];
    totalQuantity: number;
    orderPrice: number;
}

export interface OrderItem {
    itemId: string;
    price: number;
    quantity: number;
    totalPrice: number;
}
