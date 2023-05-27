import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../hooks';
import { selectShops } from '../../../store/shopsSlice';
import { GoodsItem } from './GoodsItem';

import styles from './GoodsList.module.scss';

const GoodsList = () => {
    const { shopId } = useParams();

    const shops = useAppSelector(selectShops);

    const goodsList = shops
        .find((shop) => shop.id === shopId)
        ?.menu?.map(({ id, name, price, imageURL }) => {
            return <GoodsItem key={id} id={id} title={name} price={price} imageURL={imageURL} />;
        });

    return (
        <>
            <div className={styles.goodsList}>{goodsList}</div>
        </>
    );
};
export default GoodsList;
