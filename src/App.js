import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'scss/App.scss';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';

const App = () => {
  return (
    <BrowserRouter basename='/'>
      <div className='app'>
        <Header />
        <div className='page'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
