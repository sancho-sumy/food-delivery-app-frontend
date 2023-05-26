import { Input } from '../../../common';
import styles from './CartItem.module.scss';

const CartItem = () => {
    return (
        <div className={styles.cartItem}>
            <div className={styles.cartItemImage}>
                <img
                    src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80"
                    alt="Imaddge"
                />
            </div>
            <div className={styles.cartItemInfo}>
                <h4 className={styles.cartItemTitle}>Big Fat Burger</h4>
                <p className={styles.cartItemPrice}>Price: 888</p>
                <div className={styles.cartItemQuantity}>
                    <Input
                        id="cartQuantity"
                        name="cartQuantity"
                        type="number"
                        min={0}
                    />
                </div>
            </div>
            <div className={styles.cartItemDelete}>
                <span className="icon-close"></span>
            </div>
        </div>
    );
};
export default CartItem;
