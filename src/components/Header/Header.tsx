import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header>
            <nav className={styles.navigation}>
                <ul className={styles.navigationList}>
                    <li className={styles.navigationItem}>
                        <NavLink to='shop'>Shop</NavLink>
                    </li>
                    <li className={styles.navigationItem}>
                        <NavLink to='cart'>Shopping Cart</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;
