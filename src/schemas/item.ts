export interface Item {
    _id: string;
    name: string;
    price: number;
    imageURL: string;
    shopId: string;
}

export interface CartItem {
    itemId: string;
    name: string;
    price: number;
    imageURL: string;
}
