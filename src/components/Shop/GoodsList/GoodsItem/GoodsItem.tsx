import { Button } from '../../../../common';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { CartItem } from '../../../../schemas';
import { setAlert } from '../../../../store/alertSlice';
import { addItemToCart, selectCart } from '../../../../store/cartSlice';
import { setActiveShop } from '../../../../store/shopsSlice';

import styles from './GoodsItem.module.scss';

interface Props {
    id: string;
    title: string;
    price: number;
    imageURL: string;
    shopId: string;
}

const GoodsItem = ({ id, title, price, imageURL, shopId }: Props) => {
    const cart = useAppSelector(selectCart);
    const dispatch = useAppDispatch();

    const onAddToCartHandler = () => {
        const newItem: CartItem = {
            itemId: id,
            price: price,
            name: title,
            imageURL: imageURL,
        };
        dispatch(addItemToCart(newItem));
        dispatch(setActiveShop(shopId));
        dispatch(setAlert({ messages: [`${newItem.name} added to cart!`], type: 'success' }));
        localStorage.setItem('cart', JSON.stringify({ items: [...cart.items] }));
    };

    return (
        <div className={styles.goodsItem}>
            <div className={styles.goodsItemImage}>
                <img src={imageURL} alt={title} />
            </div>
            <div className={styles.goodsItemTitle}>{title}</div>
            <div className={styles.goodsItemControls}>
                <div className={styles.goodsItemPrice}>$ {price}</div>
                <Button buttonText={'Add to cart'} onClick={onAddToCartHandler.bind(this, id)} />
            </div>
        </div>
    );
};
export default GoodsItem;
