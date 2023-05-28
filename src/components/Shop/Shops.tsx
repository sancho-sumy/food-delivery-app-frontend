import { useAppDispatch, useAppSelector } from '../../hooks';
import {
    getShops,
    selectActiveShop,
    selectCurrentShop,
    selectShops,
    setCurrentShop,
} from '../../store/shopsSlice';
import { store } from '../../store/store';
import { ShopsItem } from './ShopsItem';

import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { getAllShopsRequest } from '../../services/shop';
import { getItems } from '../../store/itemsSlice';
import styles from './Shops.module.scss';

export const loader = async () => {
    const shopsResponse = await getAllShopsRequest('shops');
    const shops = shopsResponse;
    const itemsResponse = await getAllShopsRequest('items');
    const items = itemsResponse;

    store.dispatch(getShops(shops));
    store.dispatch(getItems(items));

    return null;
};

const Shops = () => {
    const dispatch = useAppDispatch();
    const shops = useAppSelector(selectShops);
    const currentShop = useAppSelector(selectCurrentShop);
    const activeShop = useAppSelector(selectActiveShop);
    const navigate = useNavigate();

    useEffect(() => {
        navigate(`${currentShop}`);
    }, [currentShop, navigate]);

    const onShopClickHandler = (shopId: string) => {
        if (shopId) {
            dispatch(setCurrentShop(shopId));
        }
    };

    const shopsList = shops.map(({ _id, name }) => {
        if (_id) {
            return (
                <ShopsItem
                    key={_id}
                    name={name}
                    onClick={onShopClickHandler.bind(this, _id)}
                    isDisabled={!!activeShop && activeShop !== _id}
                />
            );
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
                {!currentShop && (
                    <div className={styles.itemsListEmpty}>Please select shop from the list.</div>
                )}
                <Outlet />
            </div>
        </div>
    );
};
export default Shops;
