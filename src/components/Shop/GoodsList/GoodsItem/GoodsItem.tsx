import { Button } from '../../../../common';
import styles from './GoodsItem.module.scss';

const GoodsItem = () => {
    return (
        <div className={styles.goodsItem}>
            <div className={styles.goodsItemImage}>
                <img
                    src='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80'
                    alt='Burger'
                />
            </div>
            <div className={styles.goodsItemTitle}>Big Fat Burger</div>
            <div className={styles.goodsItemControls}>
                <div className={styles.goodsItemPrice}>$ 9.99</div>
                <Button buttonText={'Add to cart'} />
            </div>
        </div>
    );
};
export default GoodsItem;
