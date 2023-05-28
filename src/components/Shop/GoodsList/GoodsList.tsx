import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../hooks';
import { GoodsItem } from './GoodsItem';

import { selectItems } from '../../../store/itemsSlice';
import styles from './GoodsList.module.scss';

const GoodsList = () => {
    const { shopId } = useParams();

    const items = useAppSelector(selectItems);

    const goodsList = items
        .filter((item) => item.shopId === shopId)
        .map(({ _id, name, price, imageURL, shopId }) => {
            return (
                <GoodsItem
                    key={_id}
                    id={_id}
                    title={name}
                    price={price}
                    imageURL={imageURL}
                    shopId={shopId}
                />
            );
        });

    return (
        <>
            <div className={styles.goodsList}>{goodsList}</div>
        </>
    );
};
export default GoodsList;
