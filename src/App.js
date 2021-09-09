import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'scss/App.scss';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Hire from 'pages/Hire';
import Home from 'pages/Home';
import Music from 'pages/Music';
import NotFound from 'pages/NotFound';
import Portfolio from 'pages/Portfolio';

const App = () => {
  return (
    <BrowserRouter basename='/'>
      <div className='app'>
        <Header />
        <div className='page'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/music' component={Music} />
            <Route exact path='/hire' component={Hire} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
