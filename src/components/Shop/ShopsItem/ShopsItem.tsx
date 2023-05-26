import { MouseEventHandler } from 'react';

import styles from './ShopsItem.module.scss';

interface Props {
    name: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const ShopsItem = ({ name, onClick }: Props) => {
    return (
        <button className={styles.shopItem} onClick={onClick}>
            <h3 className={styles.shopTitle}>{name}</h3>
        </button>
    );
};
export default ShopsItem;
