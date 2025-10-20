import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './ui/App';
import Builder from './ui/Builder';
import Collections from './ui/Collections';

const router = createBrowserRouter([
  { path: '/', element: <App />, children: [
    { index: true, element: <Builder /> },
    { path: 'collections', element: <Collections /> },
  ]}
]);

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
