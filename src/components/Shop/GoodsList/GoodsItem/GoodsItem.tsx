import { Button } from '../../../../common';
import { useAppDispatch } from '../../../../hooks';
import { Goods } from '../../../../schemas';
import { setAlert } from '../../../../store/alertSlice';
import { addItemToCart } from '../../../../store/cartSlice';

import styles from './GoodsItem.module.scss';

interface Props {
    id: string;
    title: string;
    price: number;
    imageURL: string | undefined;
}

const GoodsItem = ({ id, title, price, imageURL }: Props) => {
    const dispatch = useAppDispatch();

    const onAddToCartHandler = () => {
        const newItem: Goods = {
            id: id,
            price: price,
            name: title,
            imageURL: imageURL,
        };
        dispatch(addItemToCart(newItem));
        dispatch(setAlert({ messages: [`${newItem.name} added to cart!`], type: 'success' }));
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
