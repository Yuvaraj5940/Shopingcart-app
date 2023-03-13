import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CounterProvider } from './context/countercontext';

import About from './pages/about';
import Home from './pages/home';
import Authlayout from './layout/authlayout';
import Dashbordlayout from './layout/dashbordlayout';
import Login from './pages/login';
import Register from './pages/register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashbordlayout />,
    children: [{
      index: true,
      element: <Home />,
    },
    {
      path: 'about',
      element: <About />,
    },
    ],
  },
  {
    path: '/abut',
    element: <About />,
  },
  {
    path: '/auth',
    element: <Authlayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },

]);
function App() {
  return (
    <RouterProvider router={router} />

  );
}

export default App;
