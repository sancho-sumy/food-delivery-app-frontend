import { useAppDispatch, useAppSelector } from '../../../hooks';

import {
    decreaseItemQuantity,
    increaseItemQuantity,
    removeItemFromCart,
    selectCartItems,
} from '../../../store/cartSlice';
import { setActiveShop } from '../../../store/shopsSlice';
import styles from './CartItem.module.scss';

interface Props {
    _id: string;
    name: string;
    imageURL: string;
    quantity: number;
    totalPrice: number;
}

const CartItem = ({ _id, name, imageURL, quantity, totalPrice }: Props) => {
    const dispatch = useAppDispatch();
    const cart = useAppSelector(selectCartItems);

    const onDeleteFromCartHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(removeItemFromCart(_id));
        if (cart.length === 1) {
            dispatch(setActiveShop(''));
        }
    };

    const onIncreaseQuantity = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(increaseItemQuantity(_id));
    };

    const onDecreaseQuantity = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(decreaseItemQuantity(_id));
    };

    return (
        <div className={styles.cartItem}>
            <div className={styles.cartItemImage}>
                <img src={imageURL} alt={name} />
            </div>
            <div className={styles.cartItemInfo}>
                <h4 className={styles.cartItemTitle}>{name}</h4>
                <p className={styles.cartItemPrice}>Price: {totalPrice.toFixed(2)}</p>
                <div className={styles.cartItemQuantity}>
                    <button
                        className={styles.cartItemQuantityControls}
                        onClick={onDecreaseQuantity}
                    >
                        <span className='icon-remove-circle-filled'></span>
                    </button>
                    <div className={styles.cartItemQuantityText}>{quantity}</div>
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
