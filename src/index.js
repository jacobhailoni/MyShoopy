import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Products from './pages/Products'
import About from './pages/About'
import Faq from './pages/Faq'
import ProductDetails from './pages/ProductDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/qa",
    element: <Faq />,
  },
  {
    path: "/product-details/:name",
    element: <ProductDetails />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
