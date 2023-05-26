import { createBrowserRouter, redirect } from 'react-router-dom';

import { Cart } from './components/Cart';
import { ErrorPage } from './components/ErrorPage';
import { RootLayout } from './components/RootLayout';
import { Shops, shopsLoader } from './components/Shop';

const routes = [
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, loader: () => redirect('/shop') },
            {
                path: 'shop',
                loader: shopsLoader,
                children: [{ index: true, element: <Shops /> }],
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
