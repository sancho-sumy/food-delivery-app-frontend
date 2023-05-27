import { Outlet } from 'react-router-dom';

import { Alert } from '../../common/Alert';
import { useAppSelector } from '../../hooks';
import { selectAlert } from '../../store/alertSlice';
import { Header } from '../Header';

const RootLayout = () => {
    const alert = useAppSelector(selectAlert);

    return (
        <>
            {alert.messages.length > 0 && <Alert />}

            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default RootLayout;
