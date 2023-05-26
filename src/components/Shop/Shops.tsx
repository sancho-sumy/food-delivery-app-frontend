import { GoodsList } from './GoodsList';
import { ShopsItem } from './ShopsItem';

import styles from './Shops.module.scss';

const Shops = () => {
    return (
        <div className={styles.shop}>
            <div className={styles.shops}>
                <h2 className={styles.shopsTitle}>Shops</h2>
                <ul className={styles.shopsList}>
                    <ShopsItem />
                </ul>
            </div>
            <div className={styles.itemsList}>
                <GoodsList />
            </div>
        </div>
    );
};
export default Shops;