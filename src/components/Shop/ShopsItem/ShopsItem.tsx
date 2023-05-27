import { MouseEventHandler } from 'react';

import styles from './ShopsItem.module.scss';

interface Props {
    name: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    isDisabled: boolean;
}

const ShopsItem = ({ name, onClick, isDisabled }: Props) => {
    return (
        <button className={styles.shopItem} onClick={onClick} disabled={isDisabled}>
            <h3 className={styles.shopTitle}>{name}</h3>
        </button>
    );
};
export default ShopsItem;
