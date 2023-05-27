import { useAppDispatch, useAppSelector } from '../../hooks';
import { MOCKED_SHOPS } from '../../mock/shops';
import { getShops, selectCurrentShop, selectShops, setShop } from '../../store/shopsSlice';
import { store } from '../../store/store';
import { ShopsItem } from './ShopsItem';

import { useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import styles from './Shops.module.scss';

export const loader = async () => {
    store.dispatch(getShops(MOCKED_SHOPS));
    return null;
};

const Shops = () => {
    const dispatch = useAppDispatch();
    const shops = useAppSelector(selectShops);
    const currentShop = useAppSelector(selectCurrentShop);
    const navigate = useNavigate();

    useEffect(() => {
        navigate(`${currentShop}`);
    }, [currentShop, navigate]);

    const onShopClickHandler = (shopId: string) => {
        if (shopId) {
            dispatch(setShop(shopId));
        }
    };

    const shopsList = shops.map(({ id, name }) => {
        if (id) {
            return (
                <NavLink to={id} key={id}>
                    <ShopsItem name={name} onClick={onShopClickHandler.bind(this, id)} />
                </NavLink>
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
