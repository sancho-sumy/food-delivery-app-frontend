import { GoodsItem } from './GoodsItem';

import styles from './GoodsList.module.scss';

const GoodsList = () => {
    return (
        <div className={styles.goodsList}>
            <GoodsItem />
            <GoodsItem />
            <GoodsItem />
            <GoodsItem />
            <GoodsItem />
            <GoodsItem />
            <GoodsItem />
            <GoodsItem />
            <GoodsItem />
            <GoodsItem />

        </div>
    );
};
export default GoodsList;
