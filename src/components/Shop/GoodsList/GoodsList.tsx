import { useAppSelector } from '../../../hooks';
import { shopSelector } from '../../../store/shopsSlice';
import { GoodsItem } from './GoodsItem';

import styles from './GoodsList.module.scss';

interface Props {
    selectedShopId: string;
}

const GoodsList = ({ selectedShopId }: Props) => {
    const shops = useAppSelector(shopSelector);

    const goodsList = shops
        .find((shop) => shop.id === selectedShopId)
        ?.menu?.map(({ id, name, price }) => {
            return <GoodsItem key={id} id={id} title={name} price={price} />;
        });

    return <div className={styles.goodsList}>{goodsList}</div>;
};
export default GoodsList;
