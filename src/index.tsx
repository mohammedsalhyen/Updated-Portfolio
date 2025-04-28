import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './aos.css'
import App from './routes/App';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/",
        caseSensitive: false,
        element: <App />,
    },
]);
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
            <RouterProvider router={router} />
    </React.StrictMode>
);