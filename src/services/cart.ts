import { json } from 'react-router-dom';
import { Order } from '../schemas/order';

export const addOrderRequest = async (body: Order) => {
    const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/orders/add`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw json({ message: 'Cannot add new item.' }, { status: 500 });
    }

    const data = await response.json();

    return data;
};
