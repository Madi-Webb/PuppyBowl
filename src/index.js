import React from 'react';
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './components/App';
import Error from './components/Error';
import Home from './components/Home';
import Puppies from './components/Puppies';
import About from './components/About';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/puppies',
                element: <Puppies />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    }
]);

const root = createRoot( document.getElementById('app'));
root.render( <RouterProvider router={router} /> );
