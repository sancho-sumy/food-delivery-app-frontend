import { useEffect, useState } from 'react';

import { useAppSelector } from '../../hooks';
import { MOCKED_SHOPS } from '../../mock/shops';
import { getShops, shopSelector } from '../../store/shopsSlice';
import { store } from '../../store/store';
import { GoodsList } from './GoodsList';
import { ShopsItem } from './ShopsItem';

import { Goods } from '../../schemas';
import styles from './Shops.module.scss';

export const loader = async () => {
    store.dispatch(getShops(MOCKED_SHOPS));
    return null;
};

const Shops = () => {
    const [shop, setShop] = useState('');

    const shops = useAppSelector(shopSelector);

    useEffect(() => {
        if (shops.length > 0) {
            if (shops[0].id && shops[0].menu) {
                setShop(shops[0].id);
            }
        }
    }, [shops]);

    const onShopClickHandler = (shopId: string) => {
        if (shopId) {
            setShop(shopId);
        }
    };

    const shopsList = shops.map(({ id, name }) => {
        if (id) {
            return <ShopsItem key={id} name={name} onClick={onShopClickHandler.bind(this, id)} />;
        }
        return;
    });

    return (
        <div className={styles.shop}>
            <div className={styles.shops}>
                <h2 className={styles.shopsTitle}>Shops</h2>
                <ul className={styles.shopsList}>{shopsList}</ul>
            </div>
            <div className={styles.itemsList}>
                <GoodsList selectedShopId={shop} />
            </div>
        </div>
    );
};
export default Shops;
