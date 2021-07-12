import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'scss/App.scss';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Home from 'pages/Home';

const App = () => {
  return (
    <BrowserRouter basename='/'>
      <div className='app'>
        <Header />
        <div className='page'>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
