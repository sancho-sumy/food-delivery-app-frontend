import { createBrowserRouter, redirect } from 'react-router-dom';

import { Cart } from './components/Cart';
import { ErrorPage } from './components/ErrorPage';
import { RootLayout } from './components/RootLayout';
import { Shops, shopsLoader } from './components/Shop';
import { GoodsList } from './components/Shop/GoodsList';

const routes = [
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, loader: () => redirect('/shop') },
            {
                path: 'shop',
                element: <Shops />,
                loader: shopsLoader,
                children: [{ path: ':shopId', element: <GoodsList /> }],
            },
            {
                path: 'cart',
                element: <Cart />,
            },
        ],
    },
];

const router = createBrowserRouter(routes);

export default router;
