import { useAppDispatch } from '../../../hooks';
import { CartItemI } from '../../../schemas';

import {
    decreaseItemQuantity,
    increaseItemQuantity,
    removeItemFromCart,
} from '../../../store/cartSlice';
import styles from './CartItem.module.scss';

interface Props {
    item: CartItemI;
}

const CartItem = ({ item }: Props) => {
    const dispatch = useAppDispatch();

    const onDeleteFromCartHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(removeItemFromCart(item.id));
    };

    const onIncreaseQuantity = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(increaseItemQuantity(item.id));
    };

    const onDecreaseQuantity = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(decreaseItemQuantity(item.id));
    };

    return (
        <div className={styles.cartItem}>
            <div className={styles.cartItemImage}>
                <img
                    src='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80'
                    alt='Imaddge'
                />
            </div>
            <div className={styles.cartItemInfo}>
                <h4 className={styles.cartItemTitle}>{item.name}</h4>
                <p className={styles.cartItemPrice}>Price: {item.totalPrice.toFixed(2)}</p>
                <div className={styles.cartItemQuantity}>
                    <button
                        className={styles.cartItemQuantityControls}
                        onClick={onDecreaseQuantity}
                    >
                        <span className='icon-remove-circle-filled'></span>
                    </button>
                    <div className={styles.cartItemQuantityText}>{item.quantity}</div>
                    <button
                        className={styles.cartItemQuantityControls}
                        onClick={onIncreaseQuantity}
                    >
                        <span className='icon-add-circle-filled'></span>
                    </button>
                </div>
            </div>
            <button className={styles.cartItemDelete} onClick={onDeleteFromCartHandler}>
                <span className='icon-close'></span>
            </button>
        </div>
    );
};
export default CartItem;
