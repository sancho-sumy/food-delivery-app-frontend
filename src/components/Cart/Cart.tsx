import { Button, Input } from '../../common';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { clearCart, selectCart } from '../../store/cartSlice';
import { CartItem } from './CartItem';

import { Link, useNavigate } from 'react-router-dom';
import { orderSchema } from '../../schemas/order';
import { addOrderRequest } from '../../services/cart';
import { setAlert } from '../../store/alertSlice';
import { selectItems } from '../../store/itemsSlice';
import { setActiveShop } from '../../store/shopsSlice';
import styles from './Cart.module.scss';

const Cart = () => {
    const cart = useAppSelector(selectCart);
    const items = useAppSelector(selectItems);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const orderSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.currentTarget;

        const name = target.orderName.value;
        const email = target.orderEmail.value;
        const phone = target.orderPhone.value;
        const address = target.orderAddress.value;

        if (!name || !email || !phone || !address) {
            dispatch(setAlert({ messages: ['Please, fill all fields'], type: 'error' }));
            return;
        }

        const validatedOrder = await orderSchema
            .validate(
                {
                    info: {
                        name: name,
                        email: email,
                        phone: phone,
                        address: address,
                    },
                    items: [...cart.items],
                    orderPrice: cart.orderPrice,
                    totalQuantity: cart.totalQuantity,
                },
                { abortEarly: false },
            )
            .catch((err) => {
                const messages = err.inner.map((error: Error) => error.message);
                dispatch(setAlert({ messages: [...messages], type: 'error' }));
            });

        if (validatedOrder) {
            addOrderRequest(validatedOrder);
            dispatch(clearCart());
            dispatch(setAlert({ messages: ['Order have been placed!'], type: 'success' }));
            dispatch(setActiveShop(''));
            navigate('/shop');
        }
    };

    const cartItem = cart.items.map((cartItem) => {
        const selectedItem = items.find((item) => item._id === cartItem.itemId);

        if (selectedItem) {
            return (
                <CartItem
                    key={cartItem.itemId}
                    _id={cartItem.itemId}
                    name={selectedItem.name}
                    imageURL={selectedItem.imageURL}
                    quantity={cartItem.quantity}
                    totalPrice={cartItem.totalPrice}
                />
            );
        }
    });

    return (
        <form name='order' className={styles.cart} onSubmit={orderSubmitHandler}>
            <div className={styles.cartOrderDetails}>
                <div>
                    <Input
                        id='orderName'
                        name='orderName'
                        labelText='Name:'
                        placeholderText='Enter your name'
                    />
                </div>
                <div>
                    <Input
                        id='orderEmail'
                        name='orderEmail'
                        labelText='Email:'
                        placeholderText='Enter your email'
                    />
                </div>
                <div>
                    <Input
                        id='orderPhone'
                        name='orderPhone'
                        labelText='Phone:'
                        placeholderText='Enter your phone'
                    />
                </div>
                <div>
                    <Input
                        id='orderAddress'
                        name='orderAddress'
                        labelText='Address:'
                        placeholderText='Enter your address'
                    />
                </div>
            </div>
            <div className={styles.cartOrderList}>
                {cart.items.length < 1 && (
                    <div className={styles.cartOrderListEmpty}>
                        You haven&apos;t chosen anything yet.
                        <Link to='/shop'>
                            <Button buttonText='Go to shop!' />
                        </Link>
                    </div>
                )}
                {cartItem}
            </div>
            <div className={styles.cartFooter}>
                <div className={styles.cartFooterTotalPrice}>
                    Total price: $ {cart.orderPrice.toFixed(2)}
                </div>
                <Button buttonText='Submit' size='big' design='danger' type='submit' />
            </div>
        </form>
    );
};
export default Cart;
