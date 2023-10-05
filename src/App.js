import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import 'scss/App.scss';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Hire from 'pages/Hire';
import Home from 'pages/Home';
import Music from 'pages/Music';
import NotFound from 'pages/NotFound';
import Portfolio from 'pages/Portfolio';

const router = createBrowserRouter([{
  path: '/',
  element: (
    <div className='app'>
      <Header />
      <div className='page'>
        <Outlet />
      </div>
      <Footer />
    </div>
  ),
  errorElement: <NotFound />,
  children: [{
    path: '/',
    element: <Home />
  }, {
    path: '/portfolio',
    element: <Portfolio />
  }, {
    path: '/music',
    element: <Music />
  }, {
    path: '/hire',
    element: <Hire />
  }]
}]);

const App = () => <RouterProvider router={router} />;
export default App;
