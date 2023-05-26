import { Button, Input } from '../../common';
import styles from './Cart.module.scss';
import { CartItem } from './CartItem';

const Cart = () => {
    return (
        <form name='order' className={styles.cart}>
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
                <CartItem />
                <CartItem />
            </div>
            <div className={styles.cartFooter}>
                <div className={styles.cartFooterTotalPrice}>Total price: 999</div>
                <Button buttonText='Submit' size='big' design='danger' />
            </div>
        </form>
    );
};
export default Cart;
