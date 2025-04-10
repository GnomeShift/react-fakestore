import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import ProductDetails from './components/ProductDetails/ProductDetails';
import NotFound from './components/NotFound/NotFound';

function App() {
    const router = createHashRouter([
        {
            path: "/products",
            element: <ProductList />,
        },
        {
            path: "/product/:id",
            element: <ProductDetails />,
        },
        {
            path: "*",
            element: <NotFound />,
        },
    ])

    return (
        <RouterProvider router={router} />
    );
}

export default App;
